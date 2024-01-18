import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl p-4 m-4'> Contact Us Page</h1>
      <form className='flex flex-col w-1/2 text-center m-8'>
        <input className="border border-black p-2 m-2" type="text" placeholder='name' />
        <input className="border border-black p-2 m-2" type="text" placeholder='message' />
        <button className="border border-black p-2 mx-auto my-4 bg-green-600 rounded-lg w-1/2"> Submit </button>
      </form>
    </div>
    
  )
}

export default Contact;