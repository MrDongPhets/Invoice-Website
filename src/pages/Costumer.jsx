import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AddCostumer from '../components/AddCostumer';

const Costumer = () => {
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
          <h2>Costumer</h2>
        </div>

        <div className="mt-4 form d-flex">
        
          <div><AddCostumer /></div>
        </div>
        
        <div class="container mt-5">
  <table id="example" className="table table-striped table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone Numer</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MEMEME</td>
        <td>#12345</td>
        <td>John Doe</td>
      </tr>
  
    </tbody>
  </table>
</div>
      </div>
      
    </div></div>
  )
}

export default Costumer