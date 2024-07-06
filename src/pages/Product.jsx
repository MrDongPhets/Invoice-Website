import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AddProduct from '../components/AddProduct'

const Product = () => {
    useEffect(() => {
        $(document).ready(function () {
          $('#example').DataTable();
        });
      }, []);
  return (
    <div><Header />
    <div className="d-flex">
      <Sidebar />

      <div className="p-2">
        <div>
          <h2>Product</h2>
        </div>

        <div className="mt-4 form d-flex">
          <form class="d-flex search " role="search">
            <div className="button-submit d-flex">
              <input
                className="form-control me-2 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success "
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
          <div><AddProduct /></div>
          
        </div>
        <div class="container mt-5">
  <table id="example" className="table table-striped table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Product Code</th>
        <th>Price</th>
        <th>Unit Type</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <th>Name</th>
        <th>Product Code</th>
        <th>Price</th>
        <th>Unit Type</th>
        <th>Action</th>
      </tr>
  
    </tbody>
  </table>
</div>
      </div>
      
    </div></div>
  )
}

export default Product