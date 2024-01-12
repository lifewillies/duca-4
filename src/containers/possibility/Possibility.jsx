import React from 'react';
import './possibility.css'
import possibilityImage from '../../assets/possibility.jpeg';

const Possibility = () => {
    return (
        <div className="duca4__possibility section__padding" id="#possibility">
        <div className="duca4__possibility-image">
          <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="duca4__possibility-content">
          <h4>Request Early Access to Get Started</h4>
          <h1 className="gradient__text">The Possibilities of AI Content Creating <br /> Are Beyond Your Imagination</h1>
          <p>In the ever-evolving landscape of technology, Artificial Intelligence (AI) has emerged as a transformative force, revolutionizing various industries. One of the most fascinating realms where AI showcases its prowess is in content creation. The possibilities that AI brings to content creation are not just groundbreaking; they are, indeed, beyond what our imagination could fathom.

AI-driven content creation algorithms have transcended traditional boundaries, redefining how we produce, consume, and interact with content in a remarkable way that shapes the future of content creation.</p>
          <h4>Explore a World where imagination meets innovation.</h4>
        </div>
      </div>
    );
};

export default Possibility;