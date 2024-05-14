import React from 'react'
import amazon from '../assets/images/amazon.png'
import flipkart from '../assets/images/flipkart.png'
import hero_image from '../assets/images/hero-image.png'

function Home() {
  return (
    <>
        <div className='main flex justify-around items-center w-screen font-poppins'>

            <div className='left w-[35%] flex flex-col'>

                <p className=' text-7xl mt-6 mb-5  font-extrabold'>YOUR FEET DESERVE THE BEST</p>

                <p className=' mt-5 mb-6  text-[#5A5959] text-xs w-[70%]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className='buttons flex items-center mb-3'>
                    <button className=' bg-[#D01C28] p-1 rounded mr-4'>Shop Now</button>
                    <button className=' border-[1px] border-[#D01C28] p-1 rounded ml-4'>Category</button>
                </div>

                <p>Also Available On</p>

                <div className='imgs flex'>
                    <img src={amazon} alt='Amazon' className='m-2 w-7 h-7' />
                    <img src={flipkart} alt='Flipkart' className='m-2 w-7 h-7' />
                </div>

            </div>

            <div className='right w-[35%]'>

                <img src={hero_image} alt="" />

            </div>

        </div>
    </>
  )
}

export default Home