import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { removeItem, reduceItemBy50, reduceItemBy90 } from '../../actions/item';

const TableRow = ({
  sku,
  name,
  expDate,
  quantity,
  _id,
  _50,
  _90,
  removeItem,
  reduceItemBy50,
  reduceItemBy90
}) => {
  return (
    <Fragment>
      <tr key={sku}>
        <td>{`${sku}`}</td>
        <td>{`${name}`}</td>
        <td>
          <Moment format="DD/MM/YY">{`${expDate}`}</Moment>
        </td>
        <td>{`${quantity}`}</td>
        <td>
          <input
            id="50"
            type="checkbox"
            name=""
            value=""
            checked={_50}
            readOnly
            onClick={() => reduceItemBy50(_id)}
          />
        </td>
        <td>
          <input
            id="90"
            type="checkbox"
            name=""
            value=""
            checked={_90}
            readOnly
            onClick={() => reduceItemBy90(_id)}
          />
        </td>
        <td>
          <button className="button" onClick={() => removeItem(_id)}>
            X
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default connect(
  null,
  { removeItem, reduceItemBy50, reduceItemBy90 }
)(TableRow);
