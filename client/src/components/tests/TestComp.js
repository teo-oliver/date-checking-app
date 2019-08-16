import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../actions/item';
import _ from 'lodash';
import Moment from 'react-moment';

const TestComp = props => {
  useEffect(() => {
    props.getItems();
  }, []);

  let grouped = _.groupBy(props.items, function(n) {
    return new Date(n.expDate).getFullYear();
  });
  console.log(grouped);

  // Object.values(grouped).forEach(items => {
  //   items.map(item => {
  //     console.log(item.expDate);
  //   });
  // });

  // Object.values(grouped).forEach(items => {
  //   let x = _.sortBy(items, 'expDate');
  //   // console.log(x);
  // });

  const renderTables = () => {
    Object.values(grouped).forEach(items => {
      let x = _.sortBy(items, 'expDate');
      return x.map(item => {
        console.log(item._id);
        console.log(item.sku);
        console.log(item.expDate);
        console.log(item.name);
        return <div>hi</div>;
      });
    });
  };

  // console.log(props.items);
  return (
    <div>
      <h1>TEST</h1>
      {renderTables()}
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
  { getItems }
)(TestComp);
