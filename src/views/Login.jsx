import React, { useState } from 'react';

const Login = () => {
    const [ formState, setFormState ] = useState({ username:'', password:'' })
    const postLogin = () => {}

    return (
        <section>
            <div className='w-full max-w-xs m-auto relative' >
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={postLogin}>
                    <div className='mb-4' >
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username' >
                            Username
                        </label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            autoComplete='on'ÆA
                            name='username'
                            type='text'
                            placeholder='username'
                            value={formState.username}
                            onChange={event => setFormState({ 
                                ...formState, [event.target.name]: event.target.value 
                            })}
                        />
                    </div>
                    <div className='mb-4' >
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password' >
                            Password
                        </label>
                        <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            autoComplete='on'
                            name='password'
                            type='password'
                            placeholder='password'
                            value={formState.password}
                            onChange={event => setFormState({ 
                                ...formState, [event.target.name]: event.target.value 
                            })}
                        />
                    </div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onSubmit={postLogin}>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Login;
