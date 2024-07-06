// src/components/PopupForm.js
import React, { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const AddProduct = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className='popForm'>
      <button className="btn btn-primary "  onClick={openModal}>Add Item</button>
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
            <label>Item name *</label>
            <input type="text" name="itemName" required />
          </div>
          <div className="form-group">
            <label>Product code</label>
            <input type="text" name="productCode" />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input type="number" name="price" />
          </div>
          <div className="form-group">
            <label>Unit type</label>
            <select name="unitType">
              <option value="None">None</option>
              <option value="Unit1">Unit1</option>
              <option value="Unit2">Unit2</option>
            </select>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description"></textarea>
          </div>
          <div className="form-actions">
            <button type="button" onClick={closeModal}>Close</button>
            <button className="btn btn-primary "   type="submit">Save</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddProduct;
