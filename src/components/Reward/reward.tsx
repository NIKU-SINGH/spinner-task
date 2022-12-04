import React from 'react'
import wheel from '/wheel.png';
import { Link } from "react-router-dom";

function reward() {
  return (
    <div>
      <div className='bg-[#C6EFC8] h-[100vh] w-[100vw] p-2 flex flex-wrap items-center justify-center'>

        <div className='flex flex-col md:flex-row items-center justify-center z-10'>
          <div className=' items-center justify-center flex'>
            <img src={wheel} className="h-48 w-48 md:h-64 md:w-64 lg:h-96 lg:w-96 " />
          </div>
          <div className='w-full sm:w-4/6 lg:w-3/6 p-9 font-bold text-center flex flex-col items-center'>
            <h1 className='font-Poppins text-black text-2xl mb-6 md:mb-9'>Congrats! You Won:</h1>
            <h1 className='font-Poppins text-black font-extrabold text-4xl mb-6 md:mb-9'>20% Off Coupon on Best Sellers</h1>

            <div className='h-16 md:h-20  bg-[#9EBFA0] w-80 md:w-96 mb-6 rounded-lg flex flex-row-reverse'>
              <div className='cursor-pointer h-full w-24 bg-[#146531] relative rounded-r-lg items-center text-xl flex justify-center'>
                COPY
              </div>
              <p className='text-3xl flex items-center justify-center w-full'>XAXPDF20</p>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#146531] text-xl w-64 rounded-full p-4"
              >
                <Link to="/" className='text-white'>Close panel & Copy</Link>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default reward