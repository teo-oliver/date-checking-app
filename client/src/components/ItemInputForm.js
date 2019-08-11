import React, { useState } from 'react';

const ItemInputForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    expDate: '',
    expMonth: '',
    quantity: '',
    section: '',
    user: '',
    reduceToHalf: '',
    reduceto10: ''
  });

  const {
    name,
    sku,
    expDate,
    quantity,
    section,
    user,
    reduceToHalf,
    reduceto10
  } = formData;

  const onChange = e => {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <table className="table-row">
        <tr>
          <th>#SKU</th>
          <th>Product</th>
          <th>EXP</th>
          <th>Date Added</th>
          <th>Qyantity</th>
          <th>50%</th>
          <th>90%</th>
          <th>Delete</th>
        </tr>
      </table>
      <form
        onSubmit={e => {
          console.log('xxxxx');
          e.preventDefault();
        }}
      >
        <input
          className="form"
          type="text"
          placeholder="Sku"
          name="sku"
          value={sku}
          onChange={e => onChange(e)}
        />
        <input
          className="form"
          type="text"
          placeholder="Product Name"
          name="name"
          value={name}
          onChange={e => onChange(e)}
        />
        <input
          className="form"
          type="text"
          placeholder="Exp"
          name="expDate"
          value={expDate}
          onChange={e => onChange(e)}
        />
        <input
          className="form"
          type="text"
          placeholder="quantity"
          name="quantity"
          value={quantity}
          onChange={e => onChange(e)}
        />
        <button>Discard</button>
        <button>Save</button>
      </form>
    </div>
  );
};

export default ItemInputForm;
