import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Blog, Features, Footer, Header, Possibility, Wduca4 } from "./containers"; 
import { CTA, Brand, Navbar } from './components';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import ScrollToTop from './ScrollToTop';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <Router>
            <ScrollToTop />
            <div className="gradient__bg">
                <Navbar />
                <Header /> 
                <Brand />
                <Wduca4 />
                <Features />
                <Possibility />
                <CTA />
                <Blog />
                <Footer />
            </div>
              
            <Routes>
/* 
         
          {/*<Route path="/signup" element={<SignUp />} />*/} 
          {/*<Route path="/login" element={<LogIn />} />*/}
            {/* <Route path="/" element={<Brand />} /> */ }
            {/* <Route path="/wduca4" element={<Wduca4 />} /> */}
            {/* <Route path="/features" element={<Features />} /> */}
            {/* <Route path="/possibility" element={<Possibility />} /> */}
            {/* <Route path="/cta" element={<CTA />} /> */}
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/footer" element={<Footer />} /> */}
          {/*<Route path="*" element={<Navigate to="/" />} />*/} 

        </Routes>
            
        </Router>
        </div>
    ); 
};

export default App;