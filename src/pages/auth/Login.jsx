import React, { useState } from 'react';
import './Login.css';

const LoginNew = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form className="form-style" onSubmit={(e) => e.preventDefault()}>
          <h1 className="heading1">Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className="small-text">or use your email for registration</span>
          <input className="input-style" type="text" placeholder="Name" />
          <input className="input-style" type="email" placeholder="Email" />
          <input className="input-style" type="password" placeholder="Password" />
          <button className="button-style">Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form className="form-style" onSubmit={(e) => e.preventDefault()}>
          <h1 className="heading1">Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className="small-text">or use your account</span>
          <input className="input-style" type="email" placeholder="Email" />
          <input className="input-style" type="password" placeholder="Password" />
          <a href="#" className="link-style">Forgot your password?</a>
          <button className="button-style">Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="heading1">Welcome Back!</h1>
            <p className="paragraph">To keep connected with us please login with your personal info</p>
            <button className="button-style button-ghost" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="heading1">Hello, Friend!</h1>
            <p className="paragraph">Enter your personal details and start journey with us</p>
            <button className="button-style button-ghost" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNew;
