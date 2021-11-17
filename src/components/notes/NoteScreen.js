import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleteNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import NoteAppBar from './NoteAppBar';


const NoteScreen = () => {

    //llamar el useDispatch para usarlo el disparar la accion cuando el formalrio cambie

    const dispatch = useDispatch();

    //accder a la nota activa por medio del redux
    const {active:note} = useSelector(state => state.note);

    //console.log(note);
    //extrayendo los valores del formulario con el customhook
    const [formValues, handleInputChange, reset]=useForm(note);

    const {title, body}=formValues;
    //condicional para no redibujar infinitamente el componente al cambiar de nota
    const active=useRef(note.id);

   useEffect(() => {

    if(note.id !== active.current){
        reset(note);
        active.current=note.id;
    }
      
   }, [note, reset]);

   //efecto a la escucha de cuando el titulo o el cuerpo de la nota cambian para actualizar sus valores en tiempo real
   //es una accion sincrona 

   useEffect(() => {
       dispatch(activeNote(formValues.id,{...formValues}));
   }, [formValues, dispatch]);

   const handleDeleteNote=()=>{

    dispatch(startDeleteNote(note.id));
       
   }

  


    return (
        <div className='notes__nota-main'>
            <NoteAppBar fecha={note.date}/>
            <div className='notes__content'>

                <input
                    type='text'
                    name='title'
                    value={title}
                    placeholder='Some beatiful Title'
                    className='notes__note-title'
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder='What happend today?'
                    className='notes__textarea'
                    name='body'
                    value={body}
                    onChange={handleInputChange}
                ></textarea>
                <div className='notes__img'>

                    {
                        (note.url)&&
                        <img 
                        src={note.url}
                        alt='img?'
                    />

                    }

                    

                </div>
                <button
                    onClick={handleDeleteNote}
                 className='notes__btn-delete'
                >
                    Delete Note?
                </button>

            </div>
        </div>
    )
}

export default NoteScreen
