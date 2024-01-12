import React, { useState } from 'react';
import './SignUp.css';

/* const handleSignUp = [register, setRegister] = useState('');  */


const SignUp = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

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

        setUsername('');
        setEmail('');
        setPassword('');
        setAgreeTerms(false);

        onclose();
    }; 


    return (
        <div className="form-box register">
             <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input type="text" value={username} onChange={handleUsernameChange} required />
                    <label>Username</label>
                </div>
                <div className="input-box">
                    <input type="email" value={email} onChange={handleEmailChange} required />
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <input type="password" value={password} onChange={handlePasswordChange} required />
                    <label>Password</label>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" checked={agreeTerms} onChange={handleCheckboxChange} /> Agree to the terms and conditions</label>
                </div>
                <button type="submit" className="btn">Register</button>
                <div className="login-register">
                    <p>Already have an account?<a href="#" class="login-link"> Login
                    </a></p>
                </div>
                 {/* This button triggers the onClose function */}
               {/*  <button onClick={onClose}>Close</button> */}
            </form>
        </div>
    );
};

export default SignUp;