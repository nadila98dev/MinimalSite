import React from 'react'

const Membership = () => {
  return (
    <div className='w-full h-full bg-primarybg flex flex-col justify-between my-[70px]'>
    <div className='m-20'>
      <div className='grid grid-cols-2 text-left space-x-10'>
        <div>
          <h2 className='text-xl font-semibold'>Get our Membership</h2>
          <section className='mt-5 space-y-5'>
            <p>Welcome to Minimalist. Our goal is to provide not just exceptional products, but also exceptional service.</p>
            <p>For any questions or queries, listed below are ways in which you can reach us.</p>
            <p>Email: care@beminimalist.co.id</p>

            <button className='bg-black text-white hover:bg-gray-800 font-bold px-2 py-2'>Get Membership</button>
          </section>
        </div>

        <div>
          <img src="/assets/membership-bg.jpg" alt="membership-bg" className='h-[300px] w-auto' />
        </div>


      </div>
    </div>
</div>
  )
}

export default Membership