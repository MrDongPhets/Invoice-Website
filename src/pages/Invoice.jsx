import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";



const Invoice = () => {
    useEffect(() => {
        $(document).ready(function () {
          $('#example').DataTable();
        });
      }, []);
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />

        <div className="p-2">
          <div>
            <h2>Invoice</h2>
          </div>

          <div className="mt-4 form">
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

              <div className="button-add">
                <button className="btn btn-primary " type="button">
                  Create
                </button>
              </div>
            </form>
          </div>
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
        </tr>
        <tr>
          <td>Pending</td>
          <td>#12346</td>
          <td>Jane Smith</td>
          <td>$300</td>
          <td>01/10/2024</td>
          <td>01/03/2024</td>
        </tr>
        <tr>
          <td>Overdue</td>
          <td>#12347</td>
          <td>Mike Johnson</td>
          <td>$700</td>
          <td>01/01/2024</td>
          <td>12/01/2023</td>
        </tr>
        <tr>
          <td>Paid</td>
          <td>#12348</td>
          <td>Emily Davis</td>
          <td>$450</td>
          <td>01/07/2024</td>
          <td>01/04/2024</td>
        </tr>
      </tbody>
    </table>
  </div>
        </div>
        
      </div>
    </div>
  );
};

export default Invoice;
