import React, { useState } from 'react';


const ReadMore = ({ title, text }) => {
  const [isFullTextVisible, setFullTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setFullTextVisible(!isFullTextVisible);
  };

  return (
    <div>
     <h2>{title}</h2>
      <p>{isFullTextVisible ? text : `${text.slice(0, 200)}...`}</p>
      {/*<button type="button" onClick={toggleTextVisibility}> */}
      <span className="read-more-button" onClick={toggleTextVisibility}>
        {isFullTextVisible ? 'see less' : 'see more'}
      {/*</button>*/}
      </span>
    </div>
  );
};

export default ReadMore;