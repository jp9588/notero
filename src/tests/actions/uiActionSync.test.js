import { initLoading, removeError, setError } from "../../actions/ui"
import { types } from "../../types/types";


describe('Pruebas a las acciones sincronas del Ui', () => {

    test('Todas las pruebas unicmante cargan el action y el payload respectivo ', () => {

        const actionError=setError('Ay!!!');
        const actionRemove=removeError();
        const actionInitLoading=initLoading();

        expect(actionInitLoading).toEqual({
            type:types.uiStarLoadLogin
        });

        expect(actionRemove).toEqual({
            type:types.uiRemoveError
        });

        expect(actionError).toEqual({
            type:types.uiSetError,
            payload: 'Ay!!!'
        });
        
    })
    
    
})
