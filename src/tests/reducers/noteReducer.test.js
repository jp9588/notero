import { notesReducer } from "../../reducers/notesReducer";
import { types } from "../../types/types";


describe('Pruebas al noteReducer', () => {

    const notas=[
        {
            id:'nsheuyr6',
            date:1628957765275,
            body:'Cuerpo 1',
            title:'Titulo 1',
            url:'https://google.com'
        },
        {
            id:'049837uhgt',
            date:1628879037534,
            body:'Cuerpo 2',
            title:'Titulo 2',
            url:'https://google.com'
        }];


    test('Debe retornar las notas exixtentes en el estado y la correspondiente nota activa', () => {

        const initialState={
            notes:notas,
            active:null
        }

        const accion={
            type:types.noteActive,
            payload:{...notas[1]},
        }

        const respuesta=notesReducer(initialState, accion);

        // console.log(respuesta);
        // console.log({...notas[1]});

         expect(respuesta).toEqual(

            {
               ...initialState,
                active:{...notas[1]}

            }
            
             
             
             
             );
        
    });

    test('Debe retornar el estado y la carga de las notas mandadas en el payload', () => {

        const initialState={
            notes:notas,
            active:null
        }

        const accion={
            type:types.noteLoading,
            payload:notas,
        }

        const respuesta=notesReducer(initialState, accion);

        // console.log(respuesta);
        // console.log({...notas[1]});

         expect(respuesta).toEqual(

            {
               ...initialState,
                notes:notas

            }
            
             
             
             
             );
        
    });
    

    test('Debe retornar el estado, activo en null y las notas menos una eliminada', () => {

        const notasLess=[
            
            {
                id:'049837uhgt',
                date:1628879037534,
                body:'Cuerpo 2',
                title:'Titulo 2',
                url:'https://google.com'
            }];

        const initialState={
            notes:notas,
            active:null
        }

        const accion={
            type:types.noteDelete,
            payload:notas[0].id,
        }

        const respuesta=notesReducer(initialState, accion);

        // console.log(respuesta);
        // console.log({...notas[1]});

         expect(respuesta).toEqual(

            {
               ...initialState,
               notes:notasLess,
               active:null,


            }    
             
             
             
             );
        
    });

    test('Debe retornar el estado inicial si la accion no esta definida', () => {

        const initialState={
            notes:notas,
            active:null
        }

        const accion={
            type:types.note,
            payload:notas,
        }

        const respuesta=notesReducer(initialState, accion);

        // console.log(respuesta);
        // console.log({...notas[1]});

         expect(respuesta).toEqual(

            {
               ...initialState,
              

            }
            
             
             
             
             );
        
    });
    
    
    
})
