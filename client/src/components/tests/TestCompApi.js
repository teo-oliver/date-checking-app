import React from 'react';
import { connect } from 'react-redux';
import { getItems, getItemsByMonth } from '../../actions/item';
import _ from 'lodash';
// import Moment from 'react-moment';

const TestComp = props => {
  // useEffect(() => {
  //   props.getItems();
  //   // props.getItemsByMonth(2, 2019);
  // }, []);

  // props.getItems();
  console.log(props.items);

  // const createTables = () => {
  //   for (var i = 0; i < 11; i++) {
  //     for (var j = 2018; j < 2020; j++) props.getItemsByMonth(i, j);
  //     console.log(props.items);
  //   }
  // };

  return (
    <div>
      <h1>TEST</h1>
      {/* <div>{createTables()}</div> */}
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
  { getItems, getItemsByMonth }
)(TestComp);
