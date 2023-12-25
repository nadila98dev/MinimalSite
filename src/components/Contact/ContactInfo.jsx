import React from 'react';

const ContactInfo = () => {
  let alertMsg = "Success submit";

  function showAlert() {
    alert(alertMsg);
  }

  return (
    <div className='w-full h-auto mx-auto'>
      <section className='mb-5 md:mb-10 grid grid-cols-1 md:grid-cols-2 justify-center'>
        {/* For smaller screens, place the image on top */}
        <div className='order-2 md:order-1 md:flex md:items-center'>
          <img
            src="https://beminimalist.co/cdn/shop/files/Copy_of_6-min_1_720x.jpg?v=1661425956"
            alt=""
            className='max-w-full h-auto mx-auto md:mx-0'
          />
        </div>
        <div className='w-full md:w-3/4 lg:w-1/2 mx-auto space-y-5'>
          <h2 className='text-3xl font-bold'>Contact Us</h2>
          <form className='space-y-8'>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900'>
                Full Name
              </label>
              <input
                type='text'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-400-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-gray-600 dark:shadow-sm-light'
                placeholder='Full Name'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>
                Email
              </label>
              <input
                type='text'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-400-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-gray-600 dark:shadow-sm-light'
                placeholder='Email'
              />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900'>
                Your message
              </label>
              <textarea
                id='message'
                rows='6'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-400-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-gray-600 dark:shadow-sm-light'
                placeholder='Leave a comment...'
              ></textarea>
            </div>
            <button onClick={showAlert} className='w-full h-[35px] bg-primaryblack text-white text-lg font-semibold rounded-md'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
