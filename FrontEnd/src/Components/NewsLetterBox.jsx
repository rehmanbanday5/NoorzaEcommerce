import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert('Thank you for subscribing to our newsletter!'); // Khud sai add kiya upar wala alert hai yeh bss 
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get 10% Off!</p>
        <p className='text-gray-400 mt-3'>Subscribe to our newsletter and get 10% off your first purchase!</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
          <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter Your Email' required/> 
          <button className='bg-black text-white px-10 py-4 hover:bg-[#c89116] hover:font-semibold hover:text-black transition ease-in-out' type='submit'>Subscribe</button>

        </form>
    </div>
  )
}

export default NewsLetterBox