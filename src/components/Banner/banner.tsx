import React from 'react'
import wheel from '/wheel.png';
import { useForm } from "react-hook-form";
import { CiMail } from 'react-icons/ci'
import { MdOutlinePhoneInTalk } from 'react-icons/md'
import { Link } from "react-router-dom";

type FormData = {
  email: string;
  phoneNumber: number;
};

function banner() {

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(({ email, phoneNumber }) => {
    console.log("Email error",errors.email);
    console.log("Number error",errors.phoneNumber);
  });

  return (
    <div className='bg-[#C6EFC8] h-[100vh] w-[100vw] p-2 flex flex-wrap items-center justify-center'>

      <div className='flex flex-col md:flex-row items-center justify-center z-10'>
        <div className=' items-center justify-center flex'>
          <img src={wheel} className="h-48 w-48 md:h-64 md:w-64 lg:h-96 lg:w-96 " />
        </div>
        <div className='w-full sm:w-4/6 lg:w-1/3 p-9 font-bold'>
          <h1 className='font-Poppins text-black text-2xl mb-6 md:mb-9'>This is how EngageBud looks like in action!</h1>

          {/* Form start */}
          <form
            onSubmit={onSubmit}
            className="flex flex-col">
            <div className='bg-white h-14 md:h-16 pl-2 pr-2 flex items-center mb-5 md:mb-9 rounded-md'>
              <div className='h-full w-7 flex items-center m-2'>
                <CiMail className='text-gray-700 text-3xl' />
              </div>
              <div>
                <label className='text-sm md:text-base font-normal text-gray-900'>Email</label>
                <input
                  {...register("email", { required: "Email is required", })}
                  // {...errors.email   && <p>This is required</p>}
                  className=" w-full text-gray-900 bg-white text-base md:text-lg font-normal"
                  placeholder='joe@gmail.com'
                />
              </div>
            </div>

            <div className='bg-white h-14 md:h-16 pl-2 pr-2 flex items-center mb-5 md:mb-9 rounded-md'>
              <div className='h-full w-7 flex items-center m-2'>
                <MdOutlinePhoneInTalk className='text-gray-700 text-3xl' />
              </div>
              <div>
                <label className='text-sm md:text-base font-normal text-gray-900'>Phone number</label>
                <input
                  {...register("phoneNumber", { required: "Please enter your number", maxLength: { value: 10, message: "You exceeded the max limit" }, valueAsNumber: true })}
                  className=" w-full text-gray-900 bg-white text-lg font-normal"
                  placeholder='+91 98256 XXXXX'
                />
              </div>
            </div>

            <div className='border-2 border-black h-16 pl-2 pr-2 flex items-center mb-5 md:mb-9 rounded-md'>
              <div className='h-full w-7 flex items-center m-2'>
                <input type='checkbox' className='form-check-input cursor-pointer h-6 w-6 checked:bg-white'></input>
              </div>
              <div>
                <p className='text-black font-normal text-xs '>
                  I agree to receiving recurring automated messages at the number I have provided.
                  Consent is not a condition to purchase.
                </p>
              </div>
            </div>

            <button
              type="submit"
              onClick={onSubmit}
              className="bg-[#146531] w-full rounded-full p-4 text-white"
            >
              <Link to="/game" className='text-white'>Try your luck</Link>
            </button>

            <p className='text-black font-normal font text-xs mt-4'>
              *You can spin the wheel only once! *If you win, you can claim your coupon for 10 minutes only!
            </p>
          </form>

        </div>
      </div>


    </div>
  )
}

export default banner