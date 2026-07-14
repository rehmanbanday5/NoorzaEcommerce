import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16'>
        <img className='w-full max-w-[450px] flex-shrink-0' src={assets.about_img} alt="" />
        <div className='w-full flex flex-col justify-center gap-6 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure facere molestias aut, mollitia ea praesentium dignissimos commodi cumque recusandae eaque numquam quam architecto accusantium sequi aperiam debitis doloremque blanditiis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto, magni deleniti nisi amet mollitia accusamus placeat in necessitatibus porro corporis. Labore excepturi praesentium, illo tempora a architecto maxime, voluptas est, suscipit cum minus veniam culpa fugit. Magnam debitis suscipit, nostrum, quasi quibusdam laudantium, totam animi officia dignissimos sequi consectetur.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque a ab animi soluta iusto consequatur! Iure, repellat et. Saepe quasi ducimus, nesciunt animi cumque aliquid.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'Why'} text2={'Choose Us'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Insurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque tenetur aperiam culpa, exercitationem quae laborum dicta illo consectetur perferendis placeat?</p>
        </div>
        
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque tenetur aperiam culpa, exercitationem quae laborum dicta illo consectetur perferendis placeat?</p>
        </div>

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque tenetur aperiam culpa, exercitationem quae laborum dicta illo consectetur perferendis placeat?</p>
        </div>
      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default About