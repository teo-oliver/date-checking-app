import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createItem } from '../../actions/item';

//Make ItemInputForm as a modal. Or maybe in the sideNav?

const ItemInputForm = ({ createItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    expDate: '',
    expMonth: '',
    quantity: '',
    section: '',
    user: null,
    reduceto10: false,
    reduceToHalf: false
  });

  const { name, sku, expDate, quantity } = formData;

  const onChange = e => {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const dateData = formData.expDate.split('/');
    console.log(dateData.length);
    if (dateData.length === 2) {
      formData.expDate = `${dateData[1]}-${dateData[0]}`;
    } else if (dateData.length === 3) {
      formData.expDate = `${dateData[1]}-${dateData[0]}-${dateData[2]}`;
    }
    console.log(formData.expDate);

    // TODO set expMonth from expDate
    // formData.expMonth = formData.expDate.getMonth()
    // console.log(formData.expMonth);

    createItem(formData);
  };

  return (
    <div className="container">
      <form onSubmit={e => handleSubmit(e)}>
        <input
          className="form"
          type="text"
          placeholder="#000000"
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
          placeholder="d/m/y"
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
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: Object.values(state.items)
  };
};

export default connect(
  mapStateToProps,
  { createItem }
)(ItemInputForm);
