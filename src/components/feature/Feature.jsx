import React from 'react';
import './feature.css';
import ReadMore from '../../containers/wduca4/ReadMore';

const Feature = ({ title, text }) => {
    return (
        <div className="duca4__features-container__feature">
            <div className="duca4__features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>
                <div className="duca4__features-container_feature-text">
                <ReadMore title={title} text={text} />
                
                </div>
        </div>
    );
};

export default Feature;