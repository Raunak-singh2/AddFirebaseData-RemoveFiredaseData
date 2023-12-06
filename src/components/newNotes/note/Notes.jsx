import React from 'react';
import Section from '../../../UI/Section';
import NoteItems from './NoteItems';

const Notes = ({ items, loading, error, onFetch }) => {
    let noteList = <h1 style={{ color: "red" }}>No Notes foun star adding new one.</h1>

    if (items.length > 0) {
        noteList =
            <ul>
                {items.map((props) => (
                    <NoteItems style={{color:"#000"}} key={props.id}>{props.text}</NoteItems>
                ))}
            </ul>

    }

    let content = noteList;
    if (error) {
        content = <button onClick={onFetch}>Try again</button>
    }

    if (loading) {
        content = "Fetching notes plz wait."
    }



    return (
        <Section>
            <div className='container'>
                {content}
            </div>

        </Section>
    )
}

export default Notes
