import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initLogout } from '../../actions/auth';
import { addNewNote } from '../../actions/notes';
import JournalEntries from './JournalEntries'

const SideBarJournal = () => {

const dispatch = useDispatch();

const {name}= useSelector(state => state.auth);


const handleLogout=()=>{
    dispatch(initLogout());


}

const handleCreateNewNote=()=>{ 
    dispatch(addNewNote());
}
    return (
        <aside className='journal__sidebar'>
            
            <div className='journal__navbar mt-5'>
                <span>
                    {name} <i className="fas fa-sun sun-icon"></i>                                  

                    
                </span>

                <button
                   onClick={handleLogout} 
                >
                <i className="fas fa-power-off journal__btnLogout"></i>
                </button>

                
                
                

            </div>
            <div className='journal__entryIcon mb-20'
                onClick={handleCreateNewNote}
            
            >

                <i className="fas fa-calendar-alt mb-5"><p>New Entry</p></i>
                

            </div>

            <JournalEntries/>
            
        </aside>
        
    )
}

export default SideBarJournal
