import React from 'react'
import Template from '../components/Template'
import sigupImage from '../assets/signup.png';
const Signup = ({setIsLogedIn}) => {
  return (
    <Template 
    title="Join the millions learning to code with StudyNotion for free"
    desc1="Build skills for today, tommorrow, and beyond."
    desc2="Education to future-proof your carrer."
    image={sigupImage}
    formtype="signup"
    setIsLogedIn={setIsLogedIn}/>
  )
}

export default Signup