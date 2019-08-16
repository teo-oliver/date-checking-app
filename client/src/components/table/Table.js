import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems, getItemsByMonth, removeItem } from '../../actions/item';
import Moment from 'react-moment';

import './Table.css';

//Inventory

const Table = props => {
  useEffect(() => {
    props.getItems();
  }, []);

  console.log('This is from props: ', props.items);

  const renderTableRow = () => {
    return props.items.map(item => {
      return (
        <tr key={item._id}>
          <td>{item.sku}</td>
          <td>{item.name}</td>
          <td>
            <Moment format="DD/MM/YY">{item.expDate}</Moment>
          </td>

          <td>{item.quantity}</td>
          <td>
            <input type="checkbox" name="" value="" checked />
          </td>
          <td>
            <input type="checkbox" name="" value="" checked />
          </td>
          {/* <td>
            <input type="text" name="" id="" />
          </td> */}
          <td>
            <button
              className="button"
              onClick={() => props.removeItem(item._id)}
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <div className="table-date">
        <h1 id="month">March</h1>
        <h3 id="year">2019</h3>
      </div>
      <table className="content-table">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Product</th>
            <th>EXP</th>

            <th>Quantity</th>
            <th>50%</th>
            <th>90%</th>
            {/* <th>Written Off</th> */}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{renderTableRow()}</tbody>
      </table>
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
  { getItems, getItemsByMonth, removeItem }
)(Table);
