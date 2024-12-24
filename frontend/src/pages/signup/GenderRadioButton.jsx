import React from 'react'

const GenderRadioButton = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Male</span>
                <input type='radio' name='gender' value='male' className='radio radio-success' />
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Female</span>
                <input type='radio' name='gender' value='female' className='radio radio-success' />
            </label>
        </div>
    </div>
  )
}

export default GenderRadioButton

//STARTER CODE FOR GenderRadioButton.jsx

// import React from 'react'

// const GenderRadioButton = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Male</span>
//                 <input type='radio' name='gender' value='male' className='radio radio-success' />
//             </label>
//         </div>
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Female</span>
//                 <input type='radio' name='gender' value='female' className='radio radio-success' />
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderRadioButton