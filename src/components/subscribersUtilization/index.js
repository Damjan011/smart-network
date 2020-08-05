import './style.css';
import React from 'react';
import DownloadArrow from '../../assets/images/arrow-dl.png';
import UploadArrow from '../../assets/images/arrow-up.png';

const SubscribersUtilization = ({ }) => (

  <div id="utilization" className="ui-box ui-progress-box">
    <div className="ui-utilization">
      <div className="ui-label-container">
        <div className="ui-utilization-label">
          <p>JUNE UTILIZATION</p>
        </div>
        <div className="ui-utilization-label">
          <p>LIMIT: 35 GB</p>
        </div>
      </div>
      <div className="ui-progress-bar-big ui-progress-meter">
        <div className="ui-progress-fill">
          <div className="ui-progress-big-number"><p>14.1 GB</p>
          </div></div>
        <div className="ui-progress-end"></div>
      </div>
    </div>
    <div className="ui-speed">
      <div className="ui-speed-inner">
        <div className="ui-speed-value-container">
          <div>
            <img className="ui-speed-arrow" src={DownloadArrow} alt="Download arrow" />
          </div>
          <div>
            <p className="ui-speed-label-green">21.4 Mb/s</p>
          </div>
        </div>
        <div className="ui-progress-gradient ui-gradient-green">
          <span className="ui-progress-number-container">
            <div>
              <p>1</p>
            </div>
            <div>
              <p>5</p>
            </div>
            <div>
              <p>20</p>
            </div>
          </span>
          <span className="ui-progress-background"></span>
        </div>
      </div>
      <div className="ui-speed-inner ">
        <div className="ui-speed-value-container">
          <div>
            <img className="ui-speed-arrow" src={UploadArrow} alt="Upload arrow" />
          </div>
          <div>
            <p className="ui-speed-label-blue">4.8 Mb/s</p>
          </div>
        </div>
        <div className="ui-progress-gradient ui-gradient-blue">
          <span className="ui-progress-number-container">
            <div>
              <p>1</p>
            </div>
            <div>
              <p>5</p>
            </div>
            <div>
              <p>20</p>
            </div>
          </span>
          <span className="ui-progress-background"></span>
        </div>
      </div>
    </div>
  </div>
)

export default SubscribersUtilization;