import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
    return (
        <div className="duca4__blog section__padding" id="blog">
        <div className="duca4__blog-heading">
          <h1 className="gradient__text">
AI content creation is a vast field with numerous topics to explore., <br /> Here are some potential article ideas:.</h1>
        </div>
        <div className="duca4__blog-container">
          <div className="duca4__blog-container_groupA">
            <Article imgUrl={blog01} date="June 14, 2024" text="Transforming Content Marketing with AI: Explore how AI is revolutionizing content marketing strategies, including personalized content, automated content scheduling, and audience targeting." />
          </div>
          <div className="duca4__blog-container_groupB">
            <Article imgUrl={blog02} date="Jan 1, 2024" text="AI-Powered Content Generation Tools: Review and compare popular AI tools like Duca-4, GPT-3, Copy.ai, and Writesonic, highlighting their features, use cases, and limitations." />
            <Article imgUrl={blog03} date="Feb 11, 2024" text="Ethical Implications of AI in Content Creation: Discuss the ethical considerations surrounding AI-generated content, including issues related to plagiarism, bias, and authenticity." />
            <Article imgUrl={blog04} date="March 5, 2024" text="AI in SEO Content Optimization: Explain how AI-powered tools can enhance SEO content strategies, covering aspects like keyword research, content optimization, and SERP analysis." />
            <Article imgUrl={blog05} date="April 30, 2024" text="AI and Natural Language Generation: Dive into the workings of AI models for natural language generation, explaining concepts like neural networks, language models, and text generation." />
          </div>
        </div>
      </div>
    );
};

export default Blog;