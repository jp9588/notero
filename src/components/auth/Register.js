import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import validator from "validator";
import { registerMailNamePassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

const Register = () => {

    const [formValues, handleInputChange]=useForm({
        name:'Juan',
        email:'jdieuencuc@mchfot.com',
        password: '123456',
        password2:'123456'
    });

    const {name, email, password, password2}=formValues;

    const dispatch=useDispatch();

    const {errorMsg}=useSelector(state=>state.ui);

    const isFormValid=()=>{

        if(name.trim().length == 0){
            //console.log('Name not valid');
            dispatch(setError('Name not valid'));
            return false;
        }else if(!validator.isEmail(email)){
            //console.log('Email not valid');
            dispatch(setError('Email not valid'));
            return false
        }else if(password !== password2 || password.length<6){
            //console.log('Password is to short, less than 6 characters or is not equal!!');
            dispatch(setError('Password is to short, less than 6 characters or is not equal!!'));
            return false;
        }
        dispatch(removeError());
        return true;
        
    }

    const handleRegister=(e)=>{
        e.preventDefault();
        //console.log(name, email, password, password2);
        if(isFormValid()){
            //console.log('Formulario valido');

            dispatch(registerMailNamePassword(email, name, password));
            
        }
    }
    return (
        <div>
            <h1 className='auth__title mb-20'>Resgister Now...</h1>

            {
                errorMsg &&(

                    <div className='errorMsg'>

                    {errorMsg}

                    </div>

                )
                

            }
            
            <form onSubmit={handleRegister}>
                <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={handleInputChange}
                        value={name}
                        autoComplete='off'
                        className='mb-5 auth__input'

                    />
                <input
                    type='email'
                    name='email'
                    placeholder='E-mail'
                    autoComplete='off'
                    onChange={handleInputChange}
                    value={email}
                    className='mb-5 auth__input'

                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={handleInputChange}
                    value={password}
                    className='mb-20 auth__input'
                    
                />
                <input
                    type='password'
                    name='password2'
                    onChange={handleInputChange}
                    value={password2}
                    placeholder='Password Confirmation'
                    className='mb-20 auth__input'
                    
                />
                <hr/>
                <button
                    type='submit'
                    className='mt-20 mb-20 auth__btn'
                >
                    Login...!
                </button>

                
                <Link
                    to='/auth/login'
                    
                >
                    Alredy Regitered !! !
                </Link>
            </form>
        </div>
    )
}

export default Register
