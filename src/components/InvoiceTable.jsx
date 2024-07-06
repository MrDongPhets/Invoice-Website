
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

const InvoiceTable = () => {
    useEffect(() => {
        $(document).ready(function () {
          $('#example').DataTable();
        });
      }, []);
  return (
    <div class="container mt-5">
    <table id="example" className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Status</th>
          <th>Invoice</th>
          <th>Customer</th>
          <th>Amount</th>
          <th>Due</th>
          <th>Issued</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Paid</td>
          <td>#12345</td>
          <td>John Doe</td>
          <td>$500</td>
          <td>01/05/2024</td>
          <td>01/01/2024</td>
          <td></td>
        </tr>
        
      </tbody>
    </table>
  </div>
  )
}

export default InvoiceTable