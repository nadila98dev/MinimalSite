import React from 'react'

const RemoveButton = ({itemId, onRemove}) => {
  return (
    <>
    <button
    
    className='px-3 py-2 xl:px-4 xl:py-2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]'
    >

        <i className="bx bx-trash text-button"></i>
    </button>
    </>
  )
}

export default RemoveButton