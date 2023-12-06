import React, { Fragment, useEffect, useState } from 'react';
import NewNotes from './components/newNotes/NewNotes';
import Notes from './components/newNotes/note/Notes';
import { DB_URL } from './components/newNotes/NewNotes';
import useHttp from './hooks/use-http';



const App = () => {
  const [notes, setNotes] = useState([]);

  const transFormNotes = (data) => {
    const loopMapingData = [];
    for (const key in data) {
      loopMapingData.push({
        id: key,
        text: data[key].text,
      })
      setNotes(loopMapingData)
    }

  }
  // We can re-name ours data as well as like this aaleyasName

  const { isLoading, isError, senRequest: fetchNotes } = useHttp(
    {
      url: DB_URL,
    },
    transFormNotes
  );


  useEffect(() => {
    fetchNotes()
  }, [])

  const getChildNote = async (notes) => {
    setNotes(prevNote => prevNote.concat(notes))

  }

  return (
    <Fragment>
      <NewNotes noteHandlerChild={getChildNote} />
      <Notes
        items={notes}
        loading={isLoading}
        error={isError}
        onFetch={fetchNotes}
      />
    </Fragment>
  )
}

export default App;
