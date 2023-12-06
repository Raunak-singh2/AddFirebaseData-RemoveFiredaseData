import React, { useState } from 'react';
import Section from "../../UI/Section";
import NoteForm from '../NoteForm';

export const DB_URL = "https://todoapp-fb1a3-default-rtdb.firebaseio.com/notes.json";


const NewNotes = ({ noteHandlerChild }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const onNoteTextHandler = async (text) => {
        setIsLoading(true);
        setError(true);

        try {
            const response = await fetch(DB_URL, {
                method: 'POST',
                body: JSON.stringify({ text: text }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            if (!response.ok) {
                throw new Error("Request Feild!")
            }
            const data = await response.json();

            const createdNote = { id: data, text: text }
            noteHandlerChild(createdNote);
            console.log(createdNote)

        } catch (error) {
            setIsLoading(false);
            setError(true);
            console.log(error)
        } finally {
            setIsLoading(false);
            console.log("code Excuted.")
        }
    }


    return (
        <Section>
            <NoteForm onNoteData={onNoteTextHandler} loading={isLoading} error={error} />
            {error && <h1>{error}</h1>}
        </Section>
    )
}

export default NewNotes;
