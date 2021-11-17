import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntrie } from './JournalEntrie';

const JournalEntries = () => {

    const {notes} = useSelector(state => state.note);

  
    return (
        <div  className='journal__entries'>
            {
                notes.map(note=>{
                   return  <JournalEntrie 
                        key={note.id}
                        id={note.id}
                        date={note.date}
                        title={note.title}
                        body={note.body}
                        url={note.url}
                   
                   />
                })
            }
            
        </div>
    )
}

export default JournalEntries
