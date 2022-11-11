import React from 'react'
import '../../css/Login.css'

const Login = () => {
  return (
    <>
<div className='login_main'>

<div className='login_image'>
    hello
</div>
<div className='login_form'>
    <form>
   
        <input type="text" placeholder='Email' className='login_email' required/>
        <br/>
        <input type="password" placeholder='Password' className='login_password' required/>
        <br/>
        <button action="submit" > Login </button>
    </form>
</div>

</div>

    </>
  )
}

export default Login