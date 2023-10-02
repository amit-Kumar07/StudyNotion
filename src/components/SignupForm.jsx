import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const SignupForm = ({setIsLogedIn}) => {
    const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", password:"", confirmPassword:""})
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowconfirmPassword] = useState(false);
    const [accountType, setaccountType] = useState("student")
    const Navigate = useNavigate();
    function changeHandeler(event){
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }
    function submitHandeler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match")
            return
        }
        setIsLogedIn(true)
        toast.success("Account created");

        const accountdata = {
            ...formData
        };
        const finalData ={
            ...accountdata,
            accountType
        }

        console.log("Printing final account data");
        console.log(finalData);
        Navigate("/dashboard")
    }
  return (
     <div>
            {/* student-Instructor tab */}
     <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'> 
        <button 
        className={`${accountType === "student"
     ?
     "bg-richblack-900 text-richblack-5"
     :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setaccountType("student")}>
            Student
        </button>
        <button  className={`${accountType === "instructor"
     ?
     "bg-richblack-900 text-richblack-5"
     :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
         onClick={() => setaccountType("instructor")}>
            Instructor
        </button>
    </div>  
    <form onSubmit={submitHandeler}>
        <div className='flex gap-x-4 mt-[20px]'>
        <label className='w-full'>
            <p className='text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
            <input 
            required
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandeler}
            placeholder="Enter first Name"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 
            w-full p-[12px]'/>
        </label>
        <label className='w-full'>
            <p className='text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
            <input 
            required
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandeler}
            placeholder="Enter Last Name"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 
            w-full p-[12px]'/>
        </label>
        </div>
        <div className=' mt-[20px]'>
        <label className='w-full'>
        <p className='text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
            <input 
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandeler}
            placeholder="Enter email address"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 
            w-full p-[12px]'/>
            </label>
        </div>
        <div className='flex gap-x-4  mt-[20px]'>

        <label className='w-full relative'>
        <p className='text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
            <input 
            required
            type={showPassword ? ("text"):("password")}
            name="password"
            value={formData.password}
            onChange={changeHandeler}
            placeholder="Enter Password"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 
            w-full p-[12px]'/>
              <span 
               className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) } 
              </span>
        </label>


        <label className='w-full relative'>
        <p className='text-[0.875rem text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
            <input 
            required
            type={showconfirmPassword ? ("text"):("password")}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={changeHandeler}
            placeholder="Confirm Password"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 
            w-full p-[12px]'/>
              <span 
              className='absolute right-3 top-[40px] cursor-pointer' onClick={() =>  setShowconfirmPassword((prev) => !prev)}>
                {showconfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) } 
              </span>
        </label>
         </div>
         <button className='bg-yellow-50 w-full rounded-[8px] font-medium px-[12px] py-[8px] mt-6'>
            Create account
         </button>
    </form>
     </div>
     
    
  )
}

export default SignupForm