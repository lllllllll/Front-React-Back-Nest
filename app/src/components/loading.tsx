import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import '../scss/loading.scss';

export default () => {
  const getLoading = useSelector(state => _.findKey(state , ['status', 'PENDING']));
  return <>
    {getLoading &&
      <div className="box-load">
        <div className="loading">Loading...</div>
      </div>}
  </>
};