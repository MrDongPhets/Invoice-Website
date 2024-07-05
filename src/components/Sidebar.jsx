import React from 'react'
import { Link } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import { MdInventory } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar p-1">
      <div className="d-flex align-items-center dashboard fs-4 ">
        <ul className=""><li><RiDashboardFill size={30} />
        <Link to="/">Dashboard</Link></li></ul>
          
      
      </div>
      <div className="p-1 fs-5  documents">Documents</div>
      <div>
        <ul>
          <div className="list-documents">
            <li className="p-2 d-flex align-items-center">
                <div><FaFileInvoice size={20} /></div>
              <div className="link"><Link to="/invoice">Invoice</Link></div> 
            </li>
          </div>
          <div className="list-documents">
            <li className="p-2 d-flex align-items-center">
             
              <div> <GoPersonFill size={20} /></div>
              <div  className="link"><Link to="/invoice">Costumer</Link></div> 
            </li>
          </div>
          <div className="list-documents">
            <li className="p-2 d-flex align-items-center">
             
              <div> <MdInventory size={20} /></div>
              <div  className="link"><Link to="/invoice">Inventory</Link></div> 
            </li>
          </div>
          <div className="list-documents">
            <li className="p-2 d-flex align-items-center">
           
              <div>   <AiFillProduct size={20} /></div>
              <div  className="link"><Link to="/invoice">Product</Link></div> 
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar