import React from 'react'
import logo from "../assets/Logo.svg";
import {Link} from "react-router-dom";
import toast from 'react-hot-toast';
const Navbar = (props) => {
    let isLogedin = props.isLogedin;
    let setIsLogedIn = props.setIsLogedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav className='flex text-richblack-100 gap-x-6'>
            <ul className='flex gap-3'>
               <li>
                <Link to="/">Home</Link>
               </li>
               <li>
                <Link to="/">About</Link>
               </li>
               <li>
                <Link to="/">Contact</Link>
               </li>
            </ul>
        </nav>
        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>
            {!isLogedin &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
             { !isLogedin &&
                <Link to="/signUp">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
             { isLogedin &&
                <Link to="/">
                    <button onClick={() =>{
                    setIsLogedIn(false)
                    toast.success("Logged out")
                    }} className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        LogOut
                    </button>
                </Link>
            }
             { isLogedin &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        DashBoard
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar