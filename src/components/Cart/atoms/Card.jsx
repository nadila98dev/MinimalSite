import React from 'react'
import '../../../styles/Card.css'
import RemoveButton from '../../Atoms/RemoveButton'
const Card = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-cols-3 justify-stretch items-center md:space-x-8'>
        <img src="/assets/hair_growth_actives_18.png" alt="" className='img_prod' />
        <div className='flex flex-col items-center w-full h-auto md:flex-row m-5'>
       <p>Product Name</p>
        <div className='flex flex-wrap mt-5 md:mt-0'>
        <span
        className="cursor-pointer rounded-l bg-gray-100 py-0 px-2.5 duration-100 hover:bg-button hover:text-white">
                    {" "}
                    -{" "}
        </span>
        <input type="number" 
        className="h-9 w-[30px] border bg-white text-center text-xs flex items-center outline-none"
        value={1}
        min="1"
        readOnly
        />
         <span
        className="cursor-pointer rounded-l bg-gray-100 py-0 px-2.5 duration-100 hover:bg-button hover:text-white">
                    {" "}
                    +{" "}
        </span>
        <div className='ml-10'><p>Rp.</p></div>
        </div>

        </div>
      </div>
     <div className='grid grid-cols-1 md:grid-cols-2'>
      <div></div>
      <div className='subtotal_container'>  
        <div className='subtotal_context flex flex-cols-2  justify-between items-center '>
        <p>Subtotal</p>
        <p>Total</p>
      </div>
      <div className='mt-4'>
      <p className='text-justify text-[11px] md:text-right font-light'>Shipping, taxes, and discount codes calculated at checkout.</p>
      <button className='rounded-sm bg-black text-white font-semibold w-full h-10 mt-5'>
            Checkout
      </button>
      </div></div>
     </div>
    </div>
  )
}

export default Card