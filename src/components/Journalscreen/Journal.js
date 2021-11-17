import React from 'react'
import { useSelector } from 'react-redux'
import NoteScreen from '../notes/NoteScreen'
import NothingDisplay from './NothingDisplay'
import SideBarJournal from './SideBarJournal'

const Journal = () => {

const {active} = useSelector(state => state.note);

    return (
        <div className='journal__main-container'>
            <SideBarJournal/>

            <main>

                {
                    (active) ? <NoteScreen/> : <NothingDisplay/>
                }

            

             

            </main>
            
           
        
        </div>
    )
}

export default Journal
