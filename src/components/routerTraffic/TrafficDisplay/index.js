import React from 'react';
import './style.css';
import TrafficProgressBars from '../SpeedProgressBars';
import BandwidthGraphSnapshot from '../../graphs/bandwidthGraphSnapshot';

const TrafficDisplay = ({ wanTrafficData, setLanDeviceData, trafficData, lanView, setServiceData, serviceData, serviceView, setServiceView }) => {
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
        <ul className="router-traffic-list">
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
              <li 
              // onClick={() => {
              //   setLanDeviceData(el.deviceList);
              //   // if (serviceView === index) {
              //   //   setServiceView(-1)
              //   // }
              //   // else {
              //   //   setServiceView(index)
              //   // }
              // }
              // }
              >
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
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default TrafficDisplay;