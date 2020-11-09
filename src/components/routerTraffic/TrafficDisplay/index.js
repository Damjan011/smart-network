import React, { useState } from 'react';
import './style.css';
import TrafficProgressBars from '../SpeedProgressBars';
import BandwidthGraphSnapshot from '../../graphs/bandwidthGraphSnapshot';

const TrafficDisplay = ({ wanTrafficData, setLanDeviceData, trafficData, lanView, setServiceData, serviceData, serviceView, setServiceView }) => {
  const [userDevicesDropdown, setUserDevicesDropdown] = useState(-1);
  const [deviceServicesDropdown, setDeviceServicesDropdown] = useState(-1);
  return (
    <div className="traffic-column">
      <div className="router-traffic-gray-label">
        <p>MILLER-40242 TRAFFIC</p>
      </div>
      <div className="router-traffic-speed-container">
        <TrafficProgressBars />
      </div>


      <div className="router-traffic-gray-label">
        <p>{lanView ? 'LAN TRAFFIC' : 'WAN TRAFFIC'}</p>
      </div>


      <div className="router-traffic-list-container">
        <ul className="lan-device-list">
          {!lanView &&
            wanTrafficData.map((el, index) => (
              <li onClick={() => {
                setServiceData(el);
                if (serviceView === index) {
                  setServiceView(-1)
                }
                else {
                  setServiceView(index)
                }
              }
              }>
                <div className="router-traffic-list-image-label-wrapper">
                  <div className="router-traffic-list-image-wrapper">
                    <img src={require('../../../assets/images/' + el.logo + '-logo.png')} alt={el.service + ' logo'} className="router-traffic-list-image" />
                  </div>
                  <div className="router-traffic-list-label">
                    <p>{el.service}</p>
                  </div>
                </div>
                <div className="router-graph-arrow-wrapper">
                  <div className="router-graph">
                    <BandwidthGraphSnapshot data={el.graphData} />
                  </div>
                  <div className="router-arrow-image-container">
                    <img className="router-arrow-image" src={require('../../../assets/images/arrow-gray-right.png')} alt="Details arrow" />
                  </div>
                </div>
              </li>
            ))
          }









          {
            lanView &&
            trafficData.map((el, index) => (
              <li className={userDevicesDropdown === index ? 'lan-device-list-active-dropdown' : ''}
                
              >
                <div onClick={() => {
                  setDeviceServicesDropdown(-1)
                  if (userDevicesDropdown === index) {
                    setUserDevicesDropdown(-1)
                  }
                  else {
                    setUserDevicesDropdown(index)
                  }
                }
                } className="lan-device-list-main">
                  <div className="router-traffic-list-image-label-wrapper">
                    <div className="router-traffic-list-image-wrapper">
                      <img src={require('../../../assets/images/' + el.userProfile + '-profile.png')} alt={el.userName + ' profile'} className="router-traffic-list-image" />
                    </div>
                    <div className="router-traffic-list-label">
                      <p>{el.userName}</p>
                    </div>
                  </div>
                  <div className="router-graph-arrow-wrapper">
                    <div className="router-graph">
                      <BandwidthGraphSnapshot data={el.userGraphData} />
                    </div>
                    <div className="router-arrow-image-container">
                      <img className="router-arrow-image" src={require('../../../assets/images/arrow-gray-right.png')} alt="Details arrow" />
                    </div>
                  </div>
                </div>
                <ul className={`lan-device-list-service-dropdown ${userDevicesDropdown === index ? 'dropdown-visible' : 'dropdown-hidden'}`}>
                  {
                    el.deviceList.map((el, index) => (
                      <li onClick={() => {
                        if (deviceServicesDropdown === index) {
                          setDeviceServicesDropdown(-1)
                        }
                        else {
                          setDeviceServicesDropdown(index)
                        }
                      }
                      }>
                        <div className="lan-dropdown-list-item-inner">
                          <div className="router-traffic-list-image-label-wrapper">
                            <div className="lan-dropdown-image-wrapper">
                              <img src={require('../../../assets/images/' + el.deviceIcon + '-icon.png')} alt="Netflix logo" className="lan-dropdown-image" />
                            </div>
                            <div className="lan-dropdown-label">
                              <p>{el.deviceName}</p>
                            </div>
                          </div>
                          <div className="lan-dropdown-graph">
                            <BandwidthGraphSnapshot />
                          </div>
                        </div>
                        <ul className={`lan-device-list-service-dropdown ${deviceServicesDropdown === index ? 'dropdown-visible' : 'dropdown-hidden'}`}>
                          {
                            el.serviceList.map((el) => (
                              <li>
                                <div className="lan-dropdown-list-item-inner">
                                  <div className="router-traffic-list-image-label-wrapper">
                                    <div className="lan-dropdown-image-wrapper">
                                      <img src={require('../../../assets/images/' + el.serviceLogo + '-logo.png')} alt="Netflix logo" className="lan-dropdown-image" />
                                    </div>
                                    <div className="lan-dropdown-label">
                                      <p>{el.serviceName}</p>
                                    </div>
                                  </div>
                                  <div className="lan-dropdown-graph">
                                    <BandwidthGraphSnapshot />
                                  </div>
                                </div>
                              </li>
                            ))
                          }
                        </ul>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default TrafficDisplay;