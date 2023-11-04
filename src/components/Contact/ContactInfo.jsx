import React from 'react'

const ContactInfo = () => {
  let alertMsg = "Success submit";

  function showAlert() {
    alert(alertMsg);
  }

  return (
    <div className='w-full h-screen'>
        <div className='grid grid-cols-2 m-auto'>
           <div className='flex flex-wrap items-center justify-center'>
           <img src="./assets/contact_bg.png" alt="" />
           </div>

     <div className='flex flex-col items-center justify-start'>
                <h2 className='text-5xl'>Contact Us</h2>
                <div className="w-full max-w-xs">
                <form className="bg-gray-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                <div className='m-5 mb-6'>
                <label htmlFor="name" className='text-xl'>Name:</label>
                <input type="text" name="name" id="name" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username' placeholder='Your Name'/>
                </div>
                <div className='m-5 mb-6'>
                <label htmlFor="email" className='text-xl'>Email:</label>
                <input type="email" name="email" id="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username' placeholder='Your Name'/>
                </div>

                <div className='m-5 mb-6'>
                <label className="block mb-2 text-xl ">Your message</label>
                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Leave a message..."></textarea>
                </div>
                <button onClick={showAlert} type='submit' className='bg-primaryyellowish text-white border-primaryyellowish m-3 p-3 text-xl'>Send a message</button>
                </form>
                </div>
        </div>

    </div>
       
    </div>
  )
}

export default ContactInfo