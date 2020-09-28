import React from 'react';
import IconBox from '../../components/iconBox';
import SubscribersMap from '../../components/subscribersMap';
import SubscribersUtilization from '../../components/subscribersUtilization';
import SubscribersHealthBars from '../../components/subscribersHealthBars';
import SubscribersMenu from '../../components/subscribersMenu';
import SubscribersSupportInfo from '../../components/subscribersSupportInfo';
import BandwidthGraph from '../../components/bandwidthGraph';
import DataTransferGraph from '../../components/dataTransferGraph';
import HealthGraph from '../../components/healthGraph';

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
        <HealthGraph />
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