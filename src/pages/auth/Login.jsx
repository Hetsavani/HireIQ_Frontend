import React, { useState } from 'react';
import './Login.css';

const LoginNew = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className='tempbody'>
    <div className={`containerlogin ${isRightPanelActive ? 'right-panel-activelogin' : ''}`} id="container">
      <div className="form-containerlogin sign-up-containerlogin">
        <form className="form-stylelogin" onSubmit={(e) => e.preventDefault()}>
          <h1 className="heading1login">Create Account</h1>
          <div className="social-containerlogin">
            <a href="#" className="sociallogin"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="sociallogin"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="sociallogin"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className="small-textlogin">or use your email for registration</span>
          <input className="input-stylelogin" type="text" placeholder="Name" />
          <input className="input-stylelogin" type="email" placeholder="Email" />
          <input className="input-stylelogin" type="password" placeholder="Password" />
          <button className="button-stylelogin">Sign Up</button>
        </form>
      </div>

      <div className="form-containerlogin sign-in-containerlogin">
        <form className="form-stylelogin" onSubmit={(e) => e.preventDefault()}>
          <h1 className="heading1login">Sign in</h1>
          <div className="social-containerlogin">
            <a href="#" className="sociallogin"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="sociallogin"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="sociallogin"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className="small-textlogin">or use your account</span>
          <input className="input-stylelogin" type="email" placeholder="Email" />
          <input className="input-stylelogin" type="password" placeholder="Password" />
          <a href="#" className="link-stylelogin">Forgot your password?</a>
          <button className="button-stylelogin">Sign In</button>
        </form>
      </div>

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
