import React from 'react'
import { useNavigate } from 'react-router-dom';

const Boxbtns = ({ onClick, children }) => {
    const navigate = useNavigate();

    const handleClick = (param) => {
    navigate(`/${param}`);
    };
  return (
    <button
      onClick={() => handleClick(onClick)}
      className='ml-20 mt-10 h-25 w-40 uppercase text-blue-200 custom-text'>{children}
    </button>
  );
}

export default Boxbtns
