import React from 'react';
import IconBox from '../../components/iconBox';
import SubscribersMap from '../../components/subscribersMap';
import SubscribersUtilization from '../../components/subscribersUtilization';
import SubscribersHealthBars from '../../components/subscribersHealthBars';

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
        <SubscribersUtilization/>
        <SubscribersHealthBars/ >

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

        <SubscribersMap/>

        <div id="right-menu " className="vertical-menu-right ui-box ">
          <a className="ui-green-item " href="# ">
            <p>Status</p>
            <p>Active</p>
          </a>
          <a className="ui-blue-item " href="# ">
            <p>Acnowledge</p>
            <p>Indefinitely</p>
          </a>
          <a href="# ">
            <p>Public IP</p>
            <p>99.433.212.12</p>
          </a>
          <a href="# ">
            <p>Serial & IP</p>
            <p>64FE345GD<br />172.231.121.1 </p>
          </a>
          <a href="# ">
            <p>Last Self Reg</p>
            <p>39 minutes ago</p>
          </a>
          <a href="# ">
            <p>RouterOS</p>
            <p>6.55.3</p>
          </a>
          <a href="# ">
            <p>RouterCRM</p>
            <p>Miller-40222</p>
          </a>
          <a href="# ">
            <p>ISP Plan</p>
            <p>Cloudhouse Fiberwave</p>
          </a>
        </div>

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