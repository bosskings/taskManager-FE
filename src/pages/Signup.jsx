// import React from 'react'; 
import './login.css';

export const Login =()=>{

    return (

        <>
            <div className="flex-container">
                
                <div className="card">

                    <div className="title-section">
                        <h1 className='title-2'>Sign Up for BigAgent</h1>
                        <p className='text-norm'>Enter your details below to create your account</p>
                    </div>

                    <form action="">

                        <div className='input-field'>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder='Enter your name' />

                        </div>

                        <div className='input-field'>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='Enter your Email' />

                        </div>

                        <div className='input-field'>
                            <label htmlFor="password">Password</label>
                            <input type="passwords" placeholder='********' />

                        </div>

                        <button className='action-btn' >Sign Up</button>  

                        <p className='suggestion'>already have an account? <a href="/login">Login</a></p>

                    </form>
                </div>

            </div> 

        </>
    )
};