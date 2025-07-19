// import React, { useState } from 'react';
// import './ForgotPassword.css';

// const ForgotPassword = () => {
//   const [isRightPanelActive, setIsRightPanelActive] = useState(true);
//   const [isVerified, setIsverified] = useState(true)
//   function verifyOTP(){
//     setIsverified(false)
//   }
//   return (
//     <>
//     <div className='tempbody'>
//       {isVerified && <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
//         <div className="form-container sign-up-container">
//           <form onSubmit={(e) => e.preventDefault()}>
//             <h1>OTP verification</h1>
            
//             <input type="text" placeholder="6-digit OTP" />
//             {/* <input type="email" placeholder="Email" /> */}
//             {/* <input type="password" placeholder="Password" /> */}
//             <button onClick={verifyOTP}>Verify OTP</button>
//           </form>
//         </div>


//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <h1>OTP sent to your email</h1>
//               <p>To keep connected with us please login with your personal info</p>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1>Hello, Friend!</h1>
//               <p>Enter your personal details and start journey with us</p>
//               <button className="ghost" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
//             </div>
//           </div>
//         </div>
//       </div>}
      
//       {!isVerified && <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
//         <div className="form-container sign-up-container">
//           <form onSubmit={(e) => e.preventDefault()}>
//             <h1>Enter your new Password</h1>
            
//             <input type="password" placeholder="new password" />
//             {/* <input type="email" placeholder="Email" /> */}
//             {/* <input type="password" placeholder="Password" /> */}
//             <button onClick={verifyOTP}>Set Password</button>
//           </form>
//         </div>

//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <h1>Password Reset</h1>
//               <p>To keep connected with us please login with your personal info</p>
//               {/* <button className="ghost" onClick={() => setIsRightPanelActive(false)}>Sign In</button> */}
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1>Hello, Friend!</h1>
//               <p>Enter your personal details and start journey with us</p>
//               {/* <button className="ghost" onClick={() => setIsRightPanelActive(true)}>Sign Up</button> */}
//             </div>
//           </div>
//         </div>
//       </div>}
//       </div>
//     </>
//   );
// };

// export default ForgotPassword;



import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(true);
  const [isVerified, setIsverified] = useState(true);

  function verifyOTP() {
    setIsverified(false);
  }

  return (
    <div className='tempbody-login'>
      {isVerified ? (
        <div className={`container-login ${isRightPanelActive ? 'right-panel-active-login' : ''}`}>
          <div className="form-container-login sign-up-container-login">
            <form className="form-style-login" onSubmit={(e) => e.preventDefault()}>
              <h1 className="heading1-login">OTP verification</h1>
              <input className="input-style-login" type="text" placeholder="6-digit OTP" />
              <button className="button-style-login" onClick={verifyOTP}>Verify OTP</button>
            </form>
          </div>

          <div className="overlay-container-login">
            <div className="overlay-login">
              <div className="overlay-panel-login overlay-left-login">
                <h1 className="heading1-login">OTP sent to your email</h1>
                <p className="paragraph-login">To keep connected with us please login with your personal info</p>
              </div>
              <div className="overlay-panel-login overlay-right-login">
                <h1 className="heading1-login">Hello, Friend!</h1>
                <p className="paragraph-login">Enter your personal details and start your journey with us</p>
                <button className="button-style-login button-ghost-login" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`container-login ${isRightPanelActive ? 'right-panel-active-login' : ''}`}>
          <div className="form-container-login sign-up-container-login">
            <form className="form-style-login" onSubmit={(e) => e.preventDefault()}>
              <h1 className="heading1-login">Enter your new Password</h1>
              <input className="input-style-login" type="password" placeholder="New password" />
              <button className="button-style-login">Set Password</button>
            </form>
          </div>

          <div className="overlay-container-login">
            <div className="overlay-login">
              <div className="overlay-panel-login overlay-left-login">
                <h1 className="heading1-login">Password Reset</h1>
                <p className="paragraph-login">To keep connected with us please login with your personal info</p>
              </div>
              <div className="overlay-panel-login overlay-right-login">
                <h1 className="heading1-login">Hello, Friend!</h1>
                <p className="paragraph-login">Enter your personal details and start your journey with us</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
