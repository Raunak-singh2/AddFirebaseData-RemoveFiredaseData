import React, { useRef, useState } from 'react';
import classes from "./newNotes/NoteForm.module.css";

const NoteForm = ({ onNoteData,loading,error}) => {
    const [inputValue, setInputValue] = useState();


    // const inputRef = useRef();

    const onChangeHandler = (e) => {
        const inputValues = e.target.value;
        setInputValue(inputValues)

    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // const inpVal=inputRef.current.value;
        // console.log(inpVal)
        // if (inpVal.trim().lenght > 0) {
        //     onNoteData(inpVal);
        // }
        // inputRef.current.value = "";
        // if (inputValue.trim().length > 0) {

            onNoteData(inputValue)
            console.log(inputValue)

        // }

    }


    return (
        <form onSubmit={onSubmitHandler}>
            <input
                type='text'
                placeholder='Add your task.'
                // ref={inputRef}
                className={classes.inp}
                onChange={onChangeHandler}
            />
            <button type='submit' className={classes.btn}>{loading ? "Loading..." : "Add Notes"}</button>
        </form>
    )
}

export default NoteForm;
