import React from 'react'

const ErrorMessage = ({errorMessage}) => {
    return (
        <>
        <div className='relative flex justify-center items-center mt-5 p-10 '>
            <div className='opacity-20 absolute bg-red-500 h-full w-full rounded'>
            </div>
            <p className='opacity-1 absolute text-red-400'>{errorMessage}</p>
        </div>
        </>
    )
}

export default ErrorMessage