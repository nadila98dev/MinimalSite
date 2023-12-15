import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='w-full h-auto my-10 md:my-20'>      <div className='flex flex-col md:flex-row justify-center items-center space-x-5 md:space-y-0 md:space-x-10'>
        <div className='flex flex-col items-center bg-white shadow-md rounded p-8 mb-4 md:w-90'>
          <h2 className='text-xl md:text-2xl font-bold mb-3'>Register</h2>
          <span className='font-light mb-5'>register for experiencing our beauty magical and join us!</span>
          <form action="login" className='flex flex-col w-full'>
          <input type="text" placeholder='First Name' className='mb-3 p-2 bg-slate-100 border border-gray-300 rounded-md' />
          <input type="text" placeholder='Last Name' className='mb-3 p-2 bg-slate-100 border border-gray-300 rounded-md' />
          <input type="email" placeholder='Email' className='mb-3 p-2 bg-slate-100 border border-gray-300 rounded-md' />
          <input type="text" placeholder='Username' className='mb-3 p-2 bg-slate-100 border border-gray-300 rounded-md' />
          <input type="password" placeholder='Password' className='mb-3 p-2 bg-slate-100 border border-gray-300 rounded-md' />
            <span className='font-semibold mb-5'>
                <p>Already have account?  <Link to="/login" className='text-blue-400 hover:text-blue-800'>Login here</Link></p>
            </span>
            <button type="submit" className='bg-black text-white font-bold py-2 px-5 hover:bg-gray-800 rounded-md'>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register