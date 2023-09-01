import React from 'react';

const HomeSection = () => {
  return (
    <section className='h-auto mt-12'>
      <div className='flex flex-col'>
        <h3 className='text-3xl text-gray-500 font-light'>HAPPINESS GUARANTEE</h3>
        <h2 className='text-5xl'>Love it, or it's on us.</h2>
        <p>Here's why we know you will</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          <div className='w-full px-4 rounded-md shadow-md lg:max-w-sm flex flex-col items-center'>
            <img src="./src/assets/transparancy.png" className='object-cover w-90 h-90' alt='Transparancy' />
            <div className='m-5 p-5'>
              <h3 className='text-3xl font-semibold'>Transparency</h3>
              <p className='text-center mt-5'>No hidden ingredients, full disclosure used</p>
                <div className='flex flex-row mt-6 justify-center'>
                <span className="w-full p-0.5 bg-primaryyellowish lg:w-2/3"></span> 
                </div>
            </div>
          </div>

          <div className='w-full px-4 rounded-md shadow-md lg:max-w-sm flex flex-col items-center'>
            <img src="./src/assets/effeciency.png" className='object-cover w-90 h-90' alt='Efficiency' />
            <div className='m-5 p-5'>
              <h3 className='text-3xl font-semibold'>Efficiency</h3>
              <p className='text-center mt-5'>No hidden ingredients, full disclosure used</p>
                <div className='flex flex-row mt-6 justify-center'>
                <span className="w-full p-0.5 bg-primaryyellowish lg:w-2/3"></span> 
                </div>
            </div>
          </div>

          <div className='w-full px-4 rounded-md shadow-md lg:max-w-sm flex flex-col items-center'>
            <img src="./src/assets/affordable.png" className='object-cover w-90 h-90' alt='Affordable' />
            <div className='m-5 p-5'>
              <h3 className='text-3xl font-semibold'>Affordable</h3>
              <p className='text-center mt-5'>No hidden ingredients, full disclosure used</p>
                <div className='flex flex-row mt-6 justify-center'>
                <span className="w-full p-0.5 bg-primaryyellowish lg:w-2/3"></span> 
                </div>
              </div>
                  
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;