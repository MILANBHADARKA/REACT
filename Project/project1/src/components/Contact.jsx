import React, {useState} from 'react'
import service_img from '../assets/images/service_img.svg'
import call from '../assets/images/call.png'
import message from '../assets/images/message.png'
import message_black from '../assets/images/messageblack.png'
import { set, useForm } from 'react-hook-form'   //react-form-hook is a library that is used to handle the form in react. it is used to validate the form and also to handle the form data.for more info visit https://react-hook-form.com/get-started


function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    setError,     
    formState: { errors, isSubmitting },
  } = useForm()


  const onSubmit = async (event) => {
    event.preventDefault();

    console.log(event);

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setMessage(event.target[2].value);

    event.target[0].value = '';
    event.target[1].value = '';
    event.target[2].value = '';

  };


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
                        <form action="" onSubmit={onSubmit}>

                          <div className='relative m-2'>
                            <label className='absolute text-[13px] font-semibold top-[-10px] left-[10px] pr-2 pl-2  bg-white' htmlFor="name">Name</label>
                            <input className='p-1 w-full border-[1.5px] border-black rounded-md' type="text" id='name' name='name' />
                          </div>

                          <div className='relative m-2'>
                            <label className='absolute text-[13px] font-semibold top-[-10px] left-[10px] pr-2 pl-2  bg-white' htmlFor="email">E-Mail</label>
                            <input className='p-1 w-full border-[1.5px] border-black rounded-md' type="email" id='email' name='email' />
                          </div>

                          <div className='relative m-2'>
                            <label className='absolute text-[13px] font-semibold top-[-10px] left-[10px] pr-2 pl-2  bg-white' htmlFor="message">Text</label>
                            <textarea className='p-1 w-full border-[1.5px] border-black rounded-md' name="message" id="message" cols="30" rows="5"></textarea>
                          </div>

                          <div>
                            <button className='bg-red-600 text-white text-sm flex rounded pt-[2px] pb-[2px] pr-2 pl-2 m-2'>Submit</button>
                          </div>

                          <div>{name}</div>
                          <div>{email}</div>
                          <div>{message}</div>

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