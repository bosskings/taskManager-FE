// import React from 'react'; 
import './login.css';

export const Login =()=>{

    return (

        <>
            <div className="flex-container">
                
                <div className="card">

                    <div className="title-section">
                        <h1 className='title-2'>Login to BigAgent</h1>
                        <p className='text-norm'>Enter your details below to create your account</p>
                    </div>

                    <form action="">

                        <div className='input-field'>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='Enter your Email' />

                        </div>

                        <div className='input-field'>
                            <label htmlFor="password">Password</label>
                            <input type="passwords" placeholder='********' />

                        </div>

                        <button className='action-btn' >Login</button>  

                        <p className='suggestion'>don't have an account? <a href="/login">Signup</a></p>

                    </form>
                </div>

            </div> 

        </>
    )
};