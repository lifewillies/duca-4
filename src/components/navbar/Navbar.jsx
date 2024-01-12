import './navbar.css';
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/logo.svg';
import ModalOverlay from '../Modal/ModalOverlay';
import SignUp from '../../pages/SignUp'; 
import LogIn from '../../pages/LogIn'; 




const Menu = () => (  
    <>
    <p><Link to="home">Home</Link></p>
    <p><Link to="/wduca4">About DUCA-4</Link></p>
    <p><Link to="/features">Case Studies</Link></p>
    <p><Link to="/possibility">Opportunities</Link></p>
    <p><Link to="/cta">Cta</Link></p>
    <p><Link to="/blog">Library</Link></p>
    <p><Link to="/footer">Get Early Access</Link></p>
    </>
)

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);
const [showSignUp, setShowSignUp] = useState(false);
const [showLogIn, setShowLogIn] = useState(false);

    const handleSignUpClick = () => {
        setShowSignUp(true);
        setToggleMenu(false); // Close the menu after SignUp click
    };

    const handleLogInClick = () => {
        setShowLogIn(true);
        setToggleMenu(false); // Close the menu after LogIn click
    };

    const handleCloseClick = () => {
        setShowSignUp(false);
        setShowLogIn(false);
    };

    

    return (
        <div className="duca4__navbar">
            <div className="duca4__navbar-links">
                <div className="duca4__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="duca4__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="duca4__navbar-sign">
                {/* Display SignUp modal */}
                {showSignUp && (
                    /* <SignUp onClose={() => setShowSignUp(false)} />} */
                    <ModalOverlay onClose={() => setShowSignUp(false)}>
                        <SignUp />
                    </ModalOverlay>
                )}

                <Link to="signup"><button onClick={handleSignUpClick}>Sign Up</button></Link> 

                {/* Display LogIn modal */}

               {/* <Link to="Login"><p>Login</p></Link> */}
               {showLogIn && (
               /*<LogIn onClose={() => setShowLogIn(false)} />} */
                <ModalOverlay onClose={() => setShowLogIn(false)}>
                    <LogIn />
                </ModalOverlay>
               )}
                <Link to="login"><p onClick={handleLogInClick}>Login</p></Link> 
              {/*}  <p onClose={handleSignUpClick}>Sign Up</p> */}
              {/*}  <p onClose={handleSignUpClick}>Login</p> */}
            </div>
            <div className="duca4__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="duca4__navbar-menu_container scale-up-center"><RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    <div className="duca4__navbar-menu_container-links"> 
                        <Menu />
                        <div className="duca4__navbar-menu_container-links-sign">
                            {/* Trigger SignUp modal */}
                            <button type="button" onClick={handleSignUpClick}>Sign Up</button>

                            {/* Trigger LogIn modal */}
                            <Link to="Login"><p onClick={handleLogInClick}>Login</p></Link> 
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;