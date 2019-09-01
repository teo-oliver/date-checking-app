import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems, removeItem } from '../../actions/item';
import _ from 'lodash';

import TableRow from '../tableRow/TableRow';
import TableHeader from '../tableHeader/TableHeader';

import './Table.css';

const TestComp = props => {
  useEffect(() => {
    props.getItems();
  });

  let groupedByYear = _.groupBy(props.items, function(n) {
    return new Date(n.expDate).getFullYear();
  });

  var finalArray = [];
  Object.entries(groupedByYear).forEach(([key, value]) => {
    const x = _.groupBy(value, function(n) {
      return new Date(n.expDate).getMonth();
    });

    finalArray.push({ [key]: x });
  });

  const createTables = () => {
    let groupOfTables = [];
    for (let i = 0; i < finalArray.length; i++) {
      for (let year in finalArray[i]) {
        for (let month in finalArray[i][year]) {
          let table = [];
          table.push(<TableHeader monthNumber={month} year={year} />);

          let children = [];
          for (let j = 0; j < finalArray[i][year][month].length; j++) {
            let item = finalArray[i][year][month][j];

            children.push(
              <TableRow
                key={item._id}
                sku={item.sku}
                name={item.name}
                expDate={item.expDate}
                quantity={item.quantity}
                _id={item._id}
                _50={item.reducedToHalf}
                _90={item.reducedTo10}
              />
            );
          }
          table.push(children);
          groupOfTables.push(table);
        }
      }
    }

    return groupOfTables.map(tables => {
      return (
        <div className="container">
          {tables[0]}
          <table className="content-table">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Product</th>
                <th>EXP</th>
                <th>Quantity</th>
                <th>50%</th>
                <th>90%</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{tables[1].map(item => item)}</tbody>
          </table>
        </div>
      );
    });
  };

  return <div>{createTables()}</div>;
};

const mapStateToProps = state => {
  return {
    items: Object.values(state.items)
  };
};

export default connect(
  mapStateToProps,
  { getItems, removeItem }
)(TestComp);

// #########################################################
// Notes:
// #########################################################

// console.log('Final Array: ', finalArray);

// for (let i = 0; i < finalArray.length; i++) {
//   for (let year in finalArray[i]) {
//     console.log(year);
//     for (let month in finalArray[i][year]) {
//       console.log('Month: ', month);
//       finalArray[i][year][month].forEach(item => console.log(item.name));
//     }
//   }
// }

// finalArray.forEach(item => console.log(Object.keys(item)));
// finalArray.forEach(item => console.log(Object.values(item)));

// console.log(Object.keys(groupedByYear));
// console.log(Object.values(groupedByYear));

// {
/* <Fragment>
      <tr>
        <td>{`${item.sku}`}</td>
        <td>{`${item.name}`}</td>
        <td>
          <Moment format="DD/MM/YY">{`${item.expDate}`}</Moment>
        </td>
        <td>{`${item.quantity}`}</td>
        <td>
          <input type="checkbox" name="" value="" checked />
        </td>
        <td>
          <input type="checkbox" name="" value="" checked />
        </td>
        <td>
          <button
            className="button"
            onClick={() => props.removeItem(item._id)}
          >
            X
          </button>
        </td>
      </tr>
    </Fragment>
 */
// }

// #########################################################
// #########################################################
