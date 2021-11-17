import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { activeNote, addNewNote, loadingNotes, startDeleteNote, startSaveNote } from '../../actions/notes';
import { db } from '../../firebase/fireConfig';
import { types } from '../../types/types';
import jest from 'jest';

// con esta libreria me permite basicmante disparar acciones asincronas por medio e un dispatch en thunk
//tambien utilizando una base de datos para testing para no revolver la de dev/production
 
const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);


//cre un store ficticio para iniiclzar la db
const initState={
        auth:{
        uid:'TESTING'
    }
}
let store=mockStore(initState);



describe('Pruebas asincronas a las acciones de notes', () => {


    beforeEach( ()=>{
        store=mockStore(initState);

    } );


    
    


    test('should create a new note',  async() => {


        //uso el store para llamarl el dispatch
        await store.dispatch(addNewNote());


        //obtengo las acciones que fueron ejecutadas al realizar la accion anterior
        const acciones=store.getActions();

        //console.log(acciones);
        //llamo los expect tal cual fueran ejemplos verdaderos

         expect(acciones[0]).toEqual({
            type:types.noteActive,
            payload:{
                id:expect.any(String),
                title:'',
                body:'',
                date: expect.any(Number)
            }


         });
         await db.doc(`/TESTING/jornal/notas/${acciones[0].payload.id}`).delete(); 
        
    })



  
    // test(' loadingNotes Debe cargar todas las notas dependiendo del usuario', async () => {

    //      await store.dispatch(loadingNotes('TESTING'));

    //      const accion=store.getActions();

    //      console.log(accion);
        
    // })
    



    

    
    
    
    
});
