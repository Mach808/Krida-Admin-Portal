import { useNavigate } from 'react-router-dom';
import React from 'react';

const TextBtn = ({ onClick, children }) => {
  const navigate = useNavigate();
  
  const handleClick = (param) => {
    navigate(`/${param}`);
  };

  return (
    <button
    onClick={() => handleClick(onClick)} 
      className="txt-btns text-black mt-5 uppercase tracking-widest focus:outline-none">
      {children}
    </button>
  );
}

export default TextBtn;