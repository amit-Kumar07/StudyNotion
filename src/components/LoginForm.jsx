import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
const LoginForm = ({setIsLogedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({email:"", password:""});
    const [showPassword, setShowPassword] = useState(false);
    function changeHandler(event){
        setFormData((prevData) =>(
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }
    function submitHandeler(event){
        event.preventDefault();
        setIsLogedIn(true);
        toast.success("Logged in")
        navigate("/dashboard")
        console.log("Printing the data")
        console.log(formData)
    }
  return (
    <form onSubmit={submitHandeler} className="flex flex-col w-full mt-6 
     gap-y-4">
        <label className='w-full'>
            <p className='text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input 
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email"
            className='bg-richblack-800 rouded-[0.5rem] text-richblack-5 
             w-full p-[12px]'/>
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input 
            required
            type={showPassword ? ("text"):("password")}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            className='bg-richblack-800 rouded-[0.5rem] text-richblack-5 
            w-full p-[12px]'/>

            <span 
            className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) } 
            </span>
            <Link to="#">
                <p className='text-xs mt-1  text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
            <button className='bg-yellow-50 w-full rounded-[8px] font-medium px-[12px] py-[8px] mt-6'>
                Sign in
            </button>
        </label>
    </form>
  )
}

export default LoginForm