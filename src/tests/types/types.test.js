import { types } from "../../types/types"


describe('Asegura de tener los tipos correctos', () => {

    test('debemos tener el mismo objeto con los tipos descritos', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        
            uiSetError: '[Ui] Set Error',
            uiRemoveError: '[Ui] Remove Error',
            uiStarLoadLogin: '[Ui] Start Load',
            uiEndLoadLogin: '[Ui] End Load',
        
            noteAdd: '[Notes] Add new note',
            noteUpdate: '[Notes] Update note',
            noteDelete: '[Notes] Delete note',
            noteActive: '[Notes] Set active note',
            noteLoading: '[Notes] Load all notes',
            noteFileUrl: '[Notes] Update img url',
            noteCleaningLogout: '[Notes] Cleaning logout' 
        });
    });
    
    
})
