import React, { useState } from 'react';

const Faq = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  }

  return(
    <div className="QuestionAnswer">
      <div className={`Question ${toggle ? 'hidden' : 'active'}`} onClick={handleClick}><span>{props.question}</span></div>
      <div className={`Answer ${toggle ? 'active' : 'hidden'}`}><span>{props.answer}</span></div>
    </div>
  )
}

export default Faq;