import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounder-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
        backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
            </h1>
            <br></br>
            <form>
                <div>
                    <input type='text' placeholder='Username' className='w-full input input-bordered h-10'/>
                    <br/><br/>
                </div>
                <div>
                    <input type='text' placeholder='Password' className='w-full input input-bordered h-10'/>
                    <br/><br/>
                </div>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>Login</button>
                </div>
                <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    {"Don't"} have an account? Sign up
                </a>
            </form>
        </div>
    </div>
  )
}

export default Login


//starter code for Login.jsx

// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounder-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
//         backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                 Login
//             </h1>
//             <br></br>
//             <form>
//                 <div>
//                     <input type='text' placeholder='Username' className='w-full input input-bordered h-10'/>
//                     <br/><br/>
//                 </div>
//                 <div>
//                     <input type='text' placeholder='Password' className='w-full input input-bordered h-10'/>
//                     <br/><br/>
//                 </div>
//                 <div>
//                     <button className='btn btn-block btn-sm mt-2'>Login</button>
//                 </div>
//                 <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     {"Don't"} have an account? Sign up
//                 </a>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login