import React, { Fragment } from 'react';

import './TableHeader.css';

const TableHeader = ({ monthNumber, year }) => {
  // var d = new Date();
  var month = [];
  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';
  // var n = month[d.getMonth()];

  return (
    <Fragment>
      <div className="table-date">
        <h1 id="month">{month[monthNumber]}</h1>
        <h3 id="year">{year}</h3>
      </div>
    </Fragment>
  );
};

export default TableHeader;
