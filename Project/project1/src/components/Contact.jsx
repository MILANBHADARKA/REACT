import React from 'react'
import service_img from '../assets/images/service_img.svg'
import call from '../assets/images/call.png'
import message from '../assets/images/message.png'
import message_black from '../assets/images/messageblack.png'
import { set, useForm } from 'react-hook-form'   //react-form-hook is a library that is used to handle the form in react. it is used to validate the form and also to handle the form data.for more info visit https://react-hook-form.com/get-started


function Contact() {

  const {
    register,
    handleSubmit,
    watch,
    setError,     
    formState: { errors, isSubmitting },
  } = useForm()

  const onsubmit = async (data) => {
    console.log(data)
  } 


  return (
    <>
      <div className='main w-screen font-poppins mt-11'>

        <div className='top w-[80%] m-auto'>
              <p className=' font-extrabold text-4xl mb-2 '>CONTACT US</p>
              <p className=' text-sm text-[#5A5959]'>LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        </div>

        <div className='bottom w-[80%] m-auto flex'>

          <div className='left w-[50%] flex flex-col justify-center items-center'>

                <div className='btns flex justify-center items-center'>

                        <button className=' bg-black text-white text-sm flex rounded pt-[2.5px] pb-[2.5px] pr-2 pl-2 m-2 mr-3 w-[180px]'>
                          <div className='m-auto flex gap-1'>
                            <img src={message} alt="" />
                            <p>VIA SUPPORT CHAT</p>
                          </div>
                        </button>

                        <button className=' bg-black text-white text-sm flex rounded pt-[2.5px] pb-[2.5px] pr-2 pl-2 m-2 ml-3 w-[180px]'>
                          <div className='m-auto flex gap-1'>
                            <img src={call} alt="" />
                            <p>VIA CALL</p>
                          </div>
                        </button>

                </div>

                <div className="btn">
                        <button className='border-[1.5px] border-black   text-sm flex rounded pt-[2px] pb-[2px] pr-2 pl-2 m-2 w-[350px]'>
                          <div className='m-auto flex gap-1'>
                            <img src={message_black} alt="" />
                            <p>VIA EMAIL FORM</p>
                          </div>
                        </button>
                </div>

                <div className="form">
                        <form action="" onSubmit={handleSubmit(onsubmit)}>

                          <input type="text" placeholder='NAME' {...register("name", {required: {value: true, message: "Required"}, minLength: { value: 3, message: "Name Min length is 3 "},})} className='border-2 border-black rounded-lg w-[300px] p-1' />
                          <br />
                          {errors.name && <span className=' text-red-600'>{errors.name.message}</span>}
                          <br />

                          <input type="email" placeholder='EMAIL' {...register("email", {required: {value: true, message: "Required"},})} className='border-2 border-black rounded-lg w-[300px] p-1'  />
                          <br />
                          {errors.email && <span className=' text-red-600'>{errors.email.message}</span>}
                          <br />

                          <input type="text" placeholder='TEXT' {...register("text", {required: {value: true, message: "Required"}, minLength: { value: 10, message: "text Min length is 10 "},})} className='border-2 border-black rounded-lg w-[300px] p-1'  />
                          <br />
                          {errors.text && <span className=' text-red-600'>{errors.text.message}</span>}
                          <br />

                          <button disabled={isSubmitting} type="submit" className='rounded-md bg-red-600 p-3'>Submit</button>   {/*we can use isSubmitting to disable the button when the form is submitting. so that the user can not submit the form multiple times.*/}


                        </form>
                </div>

          </div>

          <div className='right w-[50%]'>
              <img src={service_img} alt="" />
          </div>

        </div>

      </div>
    </>
  )
}

export default Contact