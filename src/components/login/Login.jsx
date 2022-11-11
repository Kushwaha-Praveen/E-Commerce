import React from 'react'
import '../../css/Login.css'
import { BiKey } from "react-icons/bi";
import loginimage from '../../images/loginimage.jpg'

const Login = () => {
  return (
    <>
<div className='login_main'>

<div className='login_image'>
   <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt=''/>
</div>
<div className='login_form'>
       <h2>ShopHub</h2>
      <form>
   
        <input type="email" placeholder='Email' className='login_email' required/>
        <br/>
        <input type="password" placeholder='Password' className='login_password' required/>
        <br/>
        <button action="submit" className='login_submit' > <BiKey/> Login </button>
    </form>
</div>

</div>

    </>
  )
}

export default Login