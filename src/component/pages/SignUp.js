import './SignUp.css';
import React, { Component }  from 'react';
function SignUp() {
  return (
    <div className="main" style={{backgroundImage: "url(/images/account.jpg)", backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh' }}>
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src="images/a.png" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src="images/email.jpg" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src="images/image/pass.png" className="email"/>
             <input type="password" placeholder="user name" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default SignUp;