import React from 'react';
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();
  const login = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };
  return (
    <div className='flex h-screen'>
      <div className='m-auto border rounded-sm px-8 py-8 w-[30rem] h-[22rem] text-[0.9rem] leading-3 text-gray-600 font-light'>
        <div className='flex justify-center mb-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 44 44'
            className='h-11 w-11 text-gray-300'
            role='img'
            fill='currentColor'
            stroke='currentColor'
          >
            <path
              role='presentation'
              d='M36.65 0h-29.296c-4.061 0-7.354 3.292-7.354 7.354v29.296c0 4.062 3.293 7.354 7.354 7.354h29.296c4.062 0 7.354-3.292 7.354-7.354v-29.296c.001-4.062-3.291-7.354-7.354-7.354zm-.646 33.685c0 1.282-1.039 2.32-2.32 2.32h-23.359c-1.282 0-2.321-1.038-2.321-2.32v-23.36c0-1.282 1.039-2.321 2.321-2.321h23.359c1.281 0 2.32 1.039 2.32 2.321v23.36z'
            ></path>
            <path
              role='presentation'
              d='M17.333 28.003c-.736 0-1.332-.6-1.332-1.339v-9.324c0-.739.596-1.339 1.332-1.339h9.338c.738 0 1.332.6 1.332 1.339v9.324c0 .739-.594 1.339-1.332 1.339h-9.338z'
            ></path>
          </svg>
        </div>
        <div className='rounded-md border flex flex-col py-2'>
          <input
            className='w-full focus:outline-none pt-1 pb-2 px-2 border-b font-light'
            placeholder='Email Address'
          />
          <input
            className='w-full focus:outline-none pt-2 pb-1 px-2 font-light'
            placeholder='Password'
            type='password'
          />
        </div>
        <button
          type='submit'
          className='mt-3 bg-blue-600 text-white text-center w-full py-3 px-3 rounded-sm text-sm font-semibold'
          onClick={login}
        >
          Sign in
        </button>
        <div className='text-center mt-3 text-sm'>
          Don’t have a Square account?
          <span className='text-blue-600 font-semibold'>Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default index;
