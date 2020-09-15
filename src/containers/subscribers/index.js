import React from 'react';
import IconBox from '../../components/iconBox';
import SubscribersMap from '../../components/subscribersMap';
import SubscribersUtilization from '../../components/subscribersUtilization';
import SubscribersHealthBars from '../../components/subscribersHealthBars';
import SubscribersMenu from '../../components/subscribersMenu';
import SubscribersSupportInfo from '../../components/subscribersSupportInfo';
import BandwidthGraph from '../../components/bandwidthGraph';
import DataTransferGraph from '../../components/dataTransferGraph';

function Subscribers() {
  return (
    <div className="ui-top-content">
      <div className="ui-top-boxes">
        <IconBox />
        <IconBox />
        <IconBox />
      </div>
      <div className="ui-center-content">
        <SubscribersUtilization />
        <SubscribersHealthBars />
        <BandwidthGraph />
        <DataTransferGraph />
        <div id="health" className="ui-box ">
          <h1>Health<br /> Graph</h1>
        </div>
        <div className="ui-column-break ">
        </div>
        <SubscribersMap />
        <SubscribersMenu />
        <SubscribersSupportInfo />
      </div>
    </div>
  );
}

export default Subscribers;