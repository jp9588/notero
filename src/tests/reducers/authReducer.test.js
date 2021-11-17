import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"




describe('Pruebas al authReducer', () => {

    test('debe retornar un objeto con el estado del login de usuario uid y name', () => {

        const estado={
            uid:'123456',
            name:'Juan'
        }
        
    
       const respReducer=authReducer(estado,types.login);

       expect(respReducer).toEqual({
            uid:'123456',
            name:'Juan'
        });
        
    });

    test('debe retornar un objeto vacio si la accion es logout', () => {

        const estado={
            uid:'123456',
            name:'Juan'
        }

        const accion={
            type:types.logout,
        }
        
    
       const respReducer=authReducer(estado,accion);

       expect(respReducer).toEqual({});
        
    });

    test('debe retornar el estado actual si la accion no es encontrada', () => {

        const estado={
            uid:'123456',
            name:'Juan'
        }

        const accion={
            type:types.fuera,
            payload:{
                uid:'7890',
                displayName:'Roque'
            }
        }
        
    
       const respReducer=authReducer(estado,accion);

       expect(respReducer).toEqual(estado);
        
    });
    

   
   
   
})
