import {useState} from 'react'
import GenderRadioButton from './GenderRadioButton'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const {loading, signup} = useSignup();

    const handleRadioButtonChange = (gender) => {
        setInputs({...inputs, gender})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounder-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
        backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Sign Up
            </h1>
            <br/>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' placeholder='Full Name' className='w-full input input-bordered h-10'
                    value={inputs.fullName} onChange={(e) => setInputs({...inputs,fullName:e.target.value})}/>
                    <br/><br/>
                </div>
                <div>
                    <input type='text' placeholder='Username' className='w-full input input-bordered h-10'
                    value={inputs.username} onChange={(e) => setInputs({...inputs,username:e.target.value})}/>
                    <br/><br/>
                </div>
                <div>
                    <input type='password' placeholder='Password' className='w-full input input-bordered h-10'
                    value={inputs.password} onChange={(e) => setInputs({...inputs, password:e.target.value})}/>
                    <br/><br/>
                </div>
                <div>
                    <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'
                    value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
                    <br/><br/>
                </div>
                <GenderRadioButton onRadioButtonChange={handleRadioButtonChange} selectedGender = {inputs.gender}/>              
                <div>
                    <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
                        {loading? <span className='loading loading-spinner'></span> : 'Sign Up'}    
                    </button>
                </div>
                <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Already have an account? Login
                </Link>
            </form>
        </div>
    </div>
  )
}

export default SignUp

//STARTER CODE FOR SignUp.jsx

// import React from 'react'
// import GenderRadioButton from './GenderRadioButton'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounder-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
//         backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                 Sign Up
//             </h1>
//             <br/>
//             <form>
//                 <div>
//                     <input type='text' placeholder='Full Name' className='w-full input input-bordered h-10'/>
//                     <br/><br/>
//                 </div>
//                 <div>
//                     <input type='text' placeholder='Username' className='w-full input input-bordered h-10'/>
//                     <br/><br/>
//                 </div>
//                 <div>
//                     <input type='text' placeholder='Password' className='w-full input input-bordered h-10'/>
//                     <br/><br/>
//                 </div>
//                 <div>
//                     <input type='text' placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
//                     <br/><br/>
//                 </div>
//                 <GenderRadioButton/>              
//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
//                 </div>
//                 <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     Already have an account? Login
//                 </a>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default SignUp