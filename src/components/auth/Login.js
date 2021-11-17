import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { login, loginWithGoogle, singInEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'

const Login = () => {

    const dispatch = useDispatch();

    const {loading}=useSelector(state=>state.ui);

    const [formValues, handleInputChange]=useForm({
        
        email:"jdieuencuc@mchfot.com",
        password:'123456'

    });

    const {email, password}=formValues;

    const handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(email, password);
        dispatch(singInEmailPassword(email, password));
    }

    const handleLoginGoogle=()=>{
        dispatch(loginWithGoogle());
    }

    return (
        <div>
            <h1 className='auth__title mb-20'>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    name='email'
                    placeholder='E-mail'
                    autoComplete='off'
                    className='mb-5 auth__input'
                    value={email}
                    onChange={handleInputChange}

                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='mb-20 auth__input'
                    value={password}
                    onChange={handleInputChange}
                    
                />
                <hr/>
                <button
                    type='submit'
                    className='mt-20 mb-20 auth__btn'
                    disabled={loading}
                >
                    Login...!
                </button>

                <div>
                    <p className='mb-5 auth__link-social'
                    >Link to Social Networks...</p>
                    <div 
                            className="google-btn mb-20"
                            onClick={handleLoginGoogle}
                        >
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                </div>
                <Link
                    to='/auth/register'
                    
                >
                    Sing Up !
                </Link>
            </form>
        </div>
    )
}

export default Login
