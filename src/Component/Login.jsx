import React from 'react'

function Login() {
  return (
    <div>
       <div class='loginbox'>
         <h1>Login</h1>
         <input type='text' placeholder='username or email address*'/>
         <br></br>
         <br />
         <input type='text' placeholder='Password'/>

         <div class='checkbox'>
                <label>
                <input type='checkbox'/>
                  Remember me
                </label>

               </div>
               <button>Login</button>
               <h3>Lost your password?</h3>
    </div>
    </div>
  )
}

export default Login