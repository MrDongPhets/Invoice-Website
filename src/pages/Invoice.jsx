import React from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import InvoiceTable from '../components/InvoiceTable';



const Invoice = () => {
    
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
          <InvoiceTable />
        </div>
        
      </div>
    </div>
  );
};

export default Invoice;
