import React, { useState } from "react";

const Register = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const handleGoogleLogIn = async () => {};

  const handleSubmit = async () => {};

  const handleChange = (e) => {
    setUser((oldUser) => {
      return { ...oldUser, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className='flex flex-col items-center'>
      <h1>Registrarse</h1>
      <article className='flex flex-col items-center rounded-md bg-slate-200'>
        <button
          onClick={handleGoogleLogIn}
          className='my-2 w-40 rounded-md border border-slate-200 bg-gray-100 p-1 '
        >
          Google
        </button>
        <form
          className='mx-5 my-2 flex flex-col items-center space-y-4   '
          onSubmit={handleSubmit}
        >
          <label htmlFor='email' className='flex w-3/4 flex-col'>
            Correo electrónico:{" "}
            <input
              type='email'
              name='email'
              id='email'
              className='rounded-md p-1 '
              onChange={handleChange}
            />
          </label>
          <label htmlFor='password' className='flex w-3/4 flex-col'>
            Contraseña:{" "}
            <input
              type='password'
              name='password'
              id='password'
              className='rounded-md p-1 '
              onChange={handleChange}
            />
          </label>
          <button
            type='submit'
            className='w-40 rounded-md border border-slate-900 bg-slate-700 p-1 text-white'
          >
            Registrarse
          </button>
        </form>
      </article>
    </section>
  );
};

export default Register;
