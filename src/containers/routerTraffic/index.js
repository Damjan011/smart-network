import React, { useState } from 'react';
import BandwidthGraphSnapshot from '../../components/graphs/bandwidthGraphSnapshot';
import TrafficProgressBars from '../../components/routerTraffic/SpeedProgressBars';
import RouterTrafficHeader from '../../components/routerTraffic/routerTrafficHeader';
import './style.css';

const RouterTraffic = () => {
  const [lanView, setLanView] = useState(false);
  const [deviceServicesDropdown, setDeviceServicesDropdown] = useState(false);
  const [serviceView, setServiceView] = useState(false);

  const closeLanView = () => {
    setLanView(false);
  }
  const requestLanView = () => {
    setLanView(true);
  }
  return (
    <div className="ui-top-content">
      <RouterTrafficHeader requestLanView={requestLanView} closeLanView={closeLanView} lanView={lanView}/>
      <div className="ui-router-traffic-wrapper">
        <div className="traffic-column">
          <div className="router-traffic-gray-label">
            <p>MILLER-40242 TRAFFIC</p>
          </div>
          <div className="router-traffic-speed-container">
            <TrafficProgressBars />
          </div>
          <div className="router-traffic-gray-label">
            <p>WAN TRAFFIC</p>
          </div>
          <div className="router-traffic-list-container">
            <ul className="router-traffic-list">
              <li onClick={() => setServiceView(!serviceView)}>
                <div className="router-traffic-list-image-label-wrapper">
                  <div className="router-traffic-list-image-wrapper">
                    <img src={require('../../assets/images/netflix-logo.png')} alt="Netflix logo" className="router-traffic-list-image" />
                  </div>
                  <div className="router-traffic-list-label">
                    <p>Netflix</p>
                  </div>
                </div>
                <div className="router-graph-arrow-wrapper">
                  <div className="router-graph">
                    <BandwidthGraphSnapshot />
                  </div>
                  <div className="router-arrow-image-container">
                    <img className="router-arrow-image" src={require('../../assets/images/arrow-gray-right.png')} alt="Details arrow" />
                  </div>
                </div>
              </li>
              <li>
                <div className="router-traffic-list-image-label-wrapper">
                  <div className="router-traffic-list-image-wrapper">
                    <img src={require('../../assets/images/dropbox-logo.png')} alt="Netflix logo" className="router-traffic-list-image" />
                  </div>
                  <div className="router-traffic-list-label">
                    <p>Dropbox</p>
                  </div>
                </div>
                <div className="router-graph-arrow-wrapper">
                  <div className="router-graph">
                    <BandwidthGraphSnapshot />
                  </div>
                  <div className="router-arrow-image-container">
                    <img className="router-arrow-image" src={require('../../assets/images/arrow-gray-right.png')} alt="Details arrow" />
                  </div>
                </div>
              </li>
              <li>
                <div className="router-traffic-list-image-label-wrapper">
                  <div className="router-traffic-list-image-wrapper">
                    <img src={require('../../assets/images/netflix-logo.png')} alt="Netflix logo" className="router-traffic-list-image" />
                  </div>
                  <div className="router-traffic-list-label">
                    <p>Netflix</p>
                  </div>
                </div>
                <div className="router-graph-arrow-wrapper">
                  <div className="router-graph">
                    <BandwidthGraphSnapshot />
                  </div>
                  <div className="router-arrow-image-container">
                    <img className="router-arrow-image" src={require('../../assets/images/arrow-gray-right.png')} alt="Details arrow" />
                  </div>
                </div>
              </li>
              <li>
                <div className="router-traffic-list-image-label-wrapper">
                  <div className="router-traffic-list-image-wrapper">
                    <img src={require('../../assets/images/netflix-logo.png')} alt="Netflix logo" className="router-traffic-list-image" />
                  </div>
                  <div className="router-traffic-list-label">
                    <p>Netflix</p>
                  </div>
                </div>
                <div className="router-graph-arrow-wrapper">
                  <div className="router-graph">
                    <BandwidthGraphSnapshot />
                  </div>
                  <div className="router-arrow-image-container">
                    <img className="router-arrow-image" src={require('../../assets/images/arrow-gray-right.png')} alt="Details arrow" />
                  </div>
                </div>
              </li>
              <li>
                <div className="router-traffic-list-image-label-wrapper">
                  <div className="router-traffic-list-image-wrapper">
                    <img src={require('../../assets/images/netflix-logo.png')} alt="Netflix logo" className="router-traffic-list-image" />
                  </div>
                  <div className="router-traffic-list-label">
                    <p>Netflix</p>
                  </div>
                </div>

                <div className="router-graph-arrow-wrapper">
                  <div className="router-graph">
                    <BandwidthGraphSnapshot />
                  </div>

                  <div className="router-arrow-image-container">
                    <img className="router-arrow-image" src={require('../../assets/images/arrow-gray-right.png')} alt="Details arrow" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {lanView &&
          <div className="lan-device-column">
            <ul className="lan-device-list">
              <li className={deviceServicesDropdown ? 'lan-device-list-active-dropdown' : ''} onClick={() => setDeviceServicesDropdown(!deviceServicesDropdown)}>
                <div className="lan-device-list-main">
                  <div className="router-traffic-list-image-label-wrapper">
                    <div className="lan-device-list-image-wrapper">
                      <img src={require('../../assets/images/laptop-icon.png')} alt="Laptop" className="router-traffic-list-image" />
                    </div>
                    <div className="router-traffic-list-label">
                      <p>Alice's Dell XPS</p>
                    </div>
                  </div>
                  <div className="router-graph-arrow-wrapper">
                    <div className="router-graph">
                    <BandwidthGraphSnapshot/>
                    </div>
                    <div className="lan-device-list-arrow-image-container">
                      <img className="lan-device-list-arrow-image" src={!deviceServicesDropdown ? require('../../assets/images/arrow-gray-down.png') : require('../../assets/images/arrow-gray-up.png')} alt="Details arrow" />
                    </div>
                  </div>
                </div>
                <ul className={`lan-device-list-service-dropdown ${deviceServicesDropdown ? 'dropdown-visible' : 'dropdown-hidden'}`}>
                  <li>
                    <div className="lan-dropdown-list-item-inner">
                      <div className="router-traffic-list-image-label-wrapper">
                        <div className="lan-dropdown-image-wrapper">
                          <img src={require('../../assets/images/netflix-logo.png')} alt="Netflix logo" className="lan-dropdown-image" />
                        </div>
                        <div className="lan-dropdown-label">
                          <p>Netflix</p>
                        </div>
                      </div>
                      <div className="lan-dropdown-graph">
                        <BandwidthGraphSnapshot />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="lan-dropdown-list-item-inner">
                      <div className="router-traffic-list-image-label-wrapper">
                        <div className="lan-dropdown-image-wrapper">
                          <img src={require('../../assets/images/dropbox-logo.png')} alt="Netflix logo" className="lan-dropdown-image" />
                        </div>
                        <div className="lan-dropdown-label">
                          <p>Dropbox</p>
                        </div>
                      </div>
                      <div className="lan-dropdown-graph">
                        <BandwidthGraphSnapshot />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="lan-dropdown-list-item-inner">
                      <div className="router-traffic-list-image-label-wrapper">
                        <div className="lan-dropdown-image-wrapper">
                          <img src={require('../../assets/images/amazon-logo.png')} alt="Netflix logo" className="lan-dropdown-image" />
                        </div>
                        <div className="lan-dropdown-label">
                          <p>Amazon Prime</p>
                        </div>
                      </div>
                      <div className="lan-dropdown-graph">
                        <p>graph</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li onClick={() => setDeviceServicesDropdown(!deviceServicesDropdown)}>
                <div className="lan-device-list-main">
                  <div className="router-traffic-list-image-label-wrapper">
                    <div className="lan-device-list-image-wrapper">
                      <img src={require('../../assets/images/mobile-icon.png')} alt="Mobile" className="router-traffic-list-image" />
                    </div>
                    <div className="router-traffic-list-label">
                      <p>iPhone Xr</p>
                    </div>
                  </div>
                  <div className="router-graph-arrow-wrapper">
                    <div className="router-graph">
                      <BandwidthGraphSnapshot/>
                    </div>
                    <div className="lan-device-list-arrow-image-container">
                      <img className="lan-device-list-arrow-image" src={!deviceServicesDropdown ? require('../../assets/images/arrow-gray-down.png') : require('../../assets/images/arrow-gray-up.png')} alt="Details arrow" />
                    </div>
                  </div>
                </div>
              </li>
              <li onClick={() => setDeviceServicesDropdown(!deviceServicesDropdown)}>
                <div className="lan-device-list-main">
                  <div className="router-traffic-list-image-label-wrapper">
                    <div className="lan-device-list-image-wrapper">
                      <img src={require('../../assets/images/mobile-icon.png')} alt="Mobile" className="router-traffic-list-image" />
                    </div>
                    <div className="router-traffic-list-label">
                      <p>Galaxy S12</p>
                    </div>
                  </div>
                  <div className="router-graph-arrow-wrapper">
                    <div className="router-graph">
                      <BandwidthGraphSnapshot/>
                    </div>
                    <div className="lan-device-list-arrow-image-container">
                      <img className="lan-device-list-arrow-image" src={!deviceServicesDropdown ? require('../../assets/images/arrow-gray-down.png') : require('../../assets/images/arrow-gray-up.png')} alt="Details arrow" />
                    </div>
                  </div>
                </div>
              </li>
              <li onClick={() => setDeviceServicesDropdown(!deviceServicesDropdown)}>
                <div className="lan-device-list-main">
                  <div className="router-traffic-list-image-label-wrapper">
                    <div className="lan-device-list-image-wrapper">
                      <img src={require('../../assets/images/mobile-icon.png')} alt="Mobile" className="router-traffic-list-image" />
                    </div>
                    <div className="router-traffic-list-label">
                      <p>iPhone 11</p>
                    </div>
                  </div>
                  <div className="router-graph-arrow-wrapper">
                    <div className="router-graph">
                      <BandwidthGraphSnapshot/>
                    </div>
                    <div className="lan-device-list-arrow-image-container">
                      <img className="lan-device-list-arrow-image" src={!deviceServicesDropdown ? require('../../assets/images/arrow-gray-down.png') : require('../../assets/images/arrow-gray-up.png')} alt="Details arrow" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        }



        {serviceView &&
        <div className={lanView ? 'service-column-third' : 'service-column-full'}>
          <div className="service-column-full-inner">
            <div className="service-image-label-container">
              <div className="service-image-container">
                <img src={require('../../assets/images/dropbox-logo.png')} alt="Dropbox logo" />
              </div>
              <div className="service-label">
                <p>Dropbox</p>
              </div>
            </div>
            <div className="service-traffic-box">
              <div className="service-gray-label">
                <p>TRAFFIC (MBIT)</p>
              </div>
              <div className="service-box">
                <p>graph</p>
              </div>
            </div>
            <div className="service-access-data-box">
              <div className="service-gray-label">
                <p>ACCESS DATA</p>
              </div>
              <div className="service-box">
                <div className="reveal-data-text">
                  <p>Reveal more data by accessing this user’s network.</p>
                </div>
                <div onClick={() => setLanView(true)} className="request-lan-button">
                  <p>Request LAN view</p>
                </div>
              </div>
              <div className="ask-customer-label">
                <p>Ask Customer to keep the app opened to receive the request</p>
              </div>
            </div>
            <div className="service-list-container">
              <ul className="service-list">
                <li>
                  <div className="service-list-item">
                    <p>Source IP</p>
                  </div>
                  <div className="service-list-item-value">
                    <p>Data</p>
                  </div>
                </li>
                <li>
                  <div className="service-list-item">
                    <p>Source Port</p>
                  </div>
                  <div className="service-list-item-value">
                    <p>Data</p>
                  </div>
                </li>
                <li>
                  <div className="service-list-item">
                    <p>Destination IP</p>
                  </div>
                  <div className="service-list-item-value">
                    <p>Data</p>
                  </div>
                </li>
                <li>
                  <div className="service-list-item">
                    <p>Destination Port</p>
                  </div>
                  <div className="service-list-item-value">
                    <p>Data</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
}
      </div>
    </div>
  )
};

export default RouterTraffic;