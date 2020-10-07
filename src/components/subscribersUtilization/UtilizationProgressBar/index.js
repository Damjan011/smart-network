import React from 'react';
import { isNumber } from '../../recharts/src/util/DataUtils';
import './style.css';

const UtilizationProgressBar = ({ limit, usage, month }) => {
  const percentage = usage / limit * 100;
  const percentageString = percentage + '%';
  return (
    <div className="ui-utilization">
      <div className="ui-label-container">
        <div className="ui-utilization-label">
          <p>{month} UTILIZATION</p>
        </div>
        <div className="ui-utilization-label">
          <p>LIMIT: {limit} GB</p>
        </div>
      </div>
      <div className="ui-progress-bar-big ui-progress-meter">
        {
          isNumber(percentage) && (
            <div style={{ width: percentageString }} className="ui-progress-fill">
              <div className="ui-progress-big-number">
                <p>{usage} GB</p>
              </div>
              <div className="ui-progress-end"></div>
            </div>
          )
        }
      </div>
    </div>
  )
};

export default UtilizationProgressBar;