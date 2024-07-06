// src/components/PopupForm.js
import React, { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const AddCostumer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className='popForm'>
      <button className="btn btn-primary " onClick={openModal}>Add Costumer</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '10px',
            width: '600px',
            maxWidth: '100%',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        <h2>Add Item</h2>
        <form>
          <div className="form-group">
            <label>Fullname *</label>
            <input type="text" name="itemName" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" name="productCode" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" name="price" />
          </div>
          
          <div className="form-actions">
            <button type="button" onClick={closeModal}>Close</button>
            <button className="btn btn-primary " type="submit">Save</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddCostumer;
