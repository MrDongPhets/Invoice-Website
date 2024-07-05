import React from 'react'
import { BsPersonCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="d-flex align-items-center header">
    <div className="p-1 fs-1">LOGO</div>
    
    <div className='profile'>
      <BsPersonCircle size={30} />
    </div>
  </div>
  )
}

export default Header