import React from 'react'

const About = () => {
  return (
    <div className='w-full h-full bg-primarybg flex flex-col justify-between my-[70px]'>
    <div className='m-20'>
      <h2 className='text-3xl font-semibold'>Our values</h2>
    </div>
    <article className='grid justify-center text-left space-y-6'>
    <section><p>Minimalist is committed to creating products that are:</p>
    <ul class="max-w-md mt-5 space-y-1 list-none list-inside dark:text-gray-400 text-justify">
        <li>
        Efficacious
        </li>
        <li>
        Transparent
        </li>
        <li>
        Comprehensive
        </li>
    </ul></section>
    
      <section className='mt-5 space-y-4'>
      <p>The products deliver exactly what they claim, while taking into account the needs of the consumers combined along with the scientific & technological advancements.
       Whether it is the ingredients of the products, ingredients source, science, packaging & even communication, everything we do breathes <b>Transparency!</b>
      </p>

      <p>Under these conditions, the best we, as consumers, get it 'Hope in a Bottle'.</p>

      <p>We want to change this by sharing as much information & knowledge as we can about our products. Every box contains information about what goes in the product, concentration of key ingredients, where are the ingredients sourced from, pH of the product and more. We also clearly state what should users expect from the product and how long it can take to show results.</p>

      <p>This allows us to offer <b>'Promise in a Bottle'</b> and give our users control over what they consume.</p>
      </section>

    </article>
</div>
  )
}

export default About