import React from 'react';
import IconBox from '../../components/iconBox';
import SubscribersMap from '../../components/subscribersMap';
import SubscribersUtilization from '../../components/subscribersUtilization';
import SubscribersHealthBars from '../../components/subscribersHealthBars';
import SubscribersMenu from '../../components/subscribersMenu';

function Subscribers() {
  return (
    <div className="ui-top-content">
      {/* <div className="ui-top-header">
        <p className="ui-name-label">John Miller</p>
        <p className="ui-main-label">Miller-40242</p>
        <div className="ui-header-icons">
          <img className="header-icons-active" src="img/pin.png" />
          <img src="img/slider.png" />
          <img src="img/dots.png" />
        </div>
      </div> */}
      <div className="ui-top-boxes">
        <IconBox />
        <IconBox />
        <IconBox />
      </div>
      <div className="ui-center-content">
        <SubscribersUtilization />
        <SubscribersHealthBars />
        <div id="bandwidth-usage " className="ui-box ">
          <h1>Bandwidth usage<br /> Graph</h1>
        </div>
        <div id="data-transfer " className="ui-box ">
          <h1>Data transfer<br /> Graph</h1>
        </div>
        <div id="health " className="ui-box ">
          <h1>Health<br /> Graph</h1>
        </div>
        <div className="ui-column-break ">
        </div>
        <SubscribersMap />
        <SubscribersMenu />
        <div id="support-info " className="vertical-menu-right ui-box ">
          <a className="ui-blue-item " href="# ">
            <p>Support Info</p>
            <p>Hide</p>
          </a>
          <p className="ui-support-info-text ">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
          <a href="# ">
            <p className="ui-blue-text ">Share...</p>
          </a>
        </div>
      </div>
    </div>);
}

export default Subscribers;