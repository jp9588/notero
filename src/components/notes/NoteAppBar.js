import moment from 'moment';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploadFile} from '../../actions/notes';

const NoteAppBar = (fecha) => {

    const dispatch = useDispatch();

    const {active} = useSelector(state => state.note);

    const handleSave=()=>{

        //console.log(active);
        
        dispatch(startSaveNote(active));
    }

     //agregar la fecha de cada nota
   const noteDate=moment(fecha);

   const handleLoader=(e)=>{
        const file=e.target.files[0];

        if(file){
            dispatch(startUploadFile(file));
            
        }
   }

   const handleUploadFile=()=>{
       document.querySelector('#fileloader').click();
   }
   
    return (
        <div className='notes__appbar'>
            <span>{noteDate.format('MMM Do YY')}</span>
            <input
                type='file'
                id='fileloader'
                name='fileloader'
                onChange={handleLoader}
                style={{display:'none'}}
            
            ></input>
            <div>
                <button
                    onClick={handleUploadFile}
                >Picture</button>
                <button onClick={handleSave}>Save</button>

            </div>
            
            
        </div>
    )
}

export default NoteAppBar
