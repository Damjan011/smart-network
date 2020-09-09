import React from 'react';
import TopContentSearch from '../../components/topContentSearch';
// import NetworksTable from '../../components/networksTable';
import SortableTable from '../../components/networksTable';

function Networks() {
  return (
    <div className="ui-layout">
      <div className="ui-sidebar">
        <div className="ui-logo-box">
          <div className="ui-logo-wrapper">
            <img className="ui-logo-small" alt="Small logo" src="../img/Group.png" />
          </div>
          <div className="ui-logo-label">
            <p>Smart Network</p>
          </div>
        </div>
      </div>
      <div className="ui-top-content">
        <TopContentSearch />
        <SortableTable/>
      </div>
    </div>
  );
}

export default Networks;