// import React, { useState } from 'react';
// import './Login.css';

// const LoginNew = () => {
//   const [isRightPanelActive, setIsRightPanelActive] = useState(false);

//   return (
//     <div className='tempbody-login'>
//     <div className={`containerlogin ${isRightPanelActive ? 'right-panel-activelogin' : ''}`} id="container">
//       <div className="form-containerlogin sign-up-containerlogin">
//         <form className="form-stylelogin" onSubmit={(e) => e.preventDefault()}>
//           <h1 className="heading1login">Create Account</h1>
//           <div className="social-containerlogin">
//             <a href="#" className="sociallogin"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className="sociallogin"><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" className="sociallogin"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <span className="small-textlogin">or use your email for registration</span>
//           <input className="input-stylelogin" type="text" placeholder="Name" />
//           <input className="input-stylelogin" type="email" placeholder="Email" />
//           <input className="input-stylelogin" type="password" placeholder="Password" />
//           <button className="button-stylelogin">Sign Up</button>
//         </form>
//       </div>

//       <div className="form-containerlogin sign-in-containerlogin">
//         <form className="form-stylelogin" onSubmit={(e) => e.preventDefault()}>
//           <h1 className="heading1login">Sign in</h1>
//           <div className="social-containerlogin">
//             <a href="#" className="sociallogin"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" className="sociallogin"><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" className="sociallogin"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <span className="small-textlogin">or use your account</span>
//           <input className="input-stylelogin" type="email" placeholder="Email" />
//           <input className="input-stylelogin" type="password" placeholder="Password" />
//           <a href="/ForgotPassword" className="link-stylelogin">Forgot your password?</a>
//           <button className="button-stylelogin">Sign In</button>
//         </form>
//       </div>

//       <div className="overlay-containerlogin">
//         <div className="overlaylogin">
//           <div className="overlay-panellogin overlay-leftlogin">
//             <h1 className="heading1login">Welcome Back!</h1>
//             <p className="paragraphlogin">To keep connected with us please login with your personal info</p>
//             <button className="button-stylelogin button-ghostlogin" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
//           </div>
//           <div className="overlay-panellogin overlay-rightlogin">
//             <h1 className="heading1login">Hello, Friend!</h1>
//             <p className="paragraphlogin">Enter your personal details and start journey with us</p>
//             <button className="button-stylelogin button-ghostlogin" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default LoginNew;


import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const LoginNew = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const nav = useNavigate()
  const [loginData, setLoginData] = useState({ email: '', password: '', role: 'admin' });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'candidate', // default role
    imageUrl: '',
    about: '',
    resume: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', loginData);
      console.log('Login Success:', response.data);
      localStorage.setItem('token', response.data.token);

      console.log("login");


      if(response.data.user.role == "admin"){
        nav("/admin/dashboard");
        console.log("admin");
      }else{
        nav("/candidate/dashboard");
      }
    
    } catch (error) {
      console.error('Login Failed:', error.response?.data || error.message);
      // Show error to user
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', registerData);
      console.log('Register Success:', response.data);
      // Optionally auto-switch to login form
      setIsRightPanelActive(false);
    } catch (error) {
      console.error('Register Failed:', error.response?.data || error.message);
      // Show error to user
    }
  };

  return (
    <div className='tempbody-login'>
      <div className={`containerlogin ${isRightPanelActive ? 'right-panel-activelogin' : ''}`} id="container">

        {/* Sign Up Form */}
        <div className="form-containerlogin sign-up-containerlogin">
          <form className="form-stylelogin" onSubmit={handleRegister}>
            <h1 className="heading1login">Create Account</h1>
            <div className="social-containerlogin">
              <a href="#" className="sociallogin"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="sociallogin"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="sociallogin"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className="small-textlogin">or use your email for registration</span>
            <input className="input-stylelogin" type="text" placeholder="Name" value={registerData.name} onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} />
            <input className="input-stylelogin" type="email" placeholder="Email" value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} />
            <input className="input-stylelogin" type="password" placeholder="Password" value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} />
            <button className="button-stylelogin" type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-containerlogin sign-in-containerlogin">
          <form className="form-stylelogin" onSubmit={handleLogin}>
            <h1 className="heading1login">Sign in</h1>
            <div className="social-containerlogin">
              <a href="#" className="sociallogin"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="sociallogin"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="sociallogin"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className="small-textlogin">or use your account</span>
            <input className="input-stylelogin" type="email" placeholder="Email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
            <input className="input-stylelogin" type="password" placeholder="Password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
            <a href="/ForgotPassword" className="link-stylelogin">Forgot your password?</a>
            <button className="button-stylelogin" type="submit">Sign In</button>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-containerlogin">
          <div className="overlaylogin">
            <div className="overlay-panellogin overlay-leftlogin">
              <h1 className="heading1login">Welcome Back!</h1>
              <p className="paragraphlogin">To keep connected with us please login with your personal info</p>
              <button className="button-stylelogin button-ghostlogin" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
            </div>
            <div className="overlay-panellogin overlay-rightlogin">
              <h1 className="heading1login">Hello, Friend!</h1>
              <p className="paragraphlogin">Enter your personal details and start journey with us</p>
              <button className="button-stylelogin button-ghostlogin" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginNew;
