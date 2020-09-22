import React from 'react';
import TopContentSearch from '../../components/topContentSearch';
import NetworksTableNew from '../../components/networksTable/networksTableNew';

function Networks() {
  return (
    <div className="ui-top-content">
      <TopContentSearch />
      <NetworksTableNew />
    </div>
  );
}

export default Networks;