import React, { useState } from 'react';
import './Login.css';

const LogIn = ({ onClose }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);



    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleCheckboxChange = () => {
        setAgreeTerms(!agreeTerms);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmail('');
        setPassword('');
        setAgreeTerms(false);

        onClose();

    }; 

    return (
        <div className="form-box signIn">
            <h2>Login</h2>
            <form action="#">
                <div class="input-box">
                    <input type="email" value={email} onChange={handleEmailChange} required />
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <input type="password" value={password} onChange={handlePasswordChange} required />
                    <label>Password extended</label>
                </div>
                <div class="remember-forgot">
                    <label><input type="checkbox" checked={agreeTerms} onChange={handleCheckboxChange} />Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" class="btn">Login</button>
                <div class="login-register">
                    <p>Don't have an account?<a href="#" class="register-link"> Sign Up
                    </a></p>
                </div>
                 {/* This button triggers the onClose function */}
                {/* <button onClick={onClose}>Close</button> */}
            </form>
        </div>  
    );
};

export default LogIn;