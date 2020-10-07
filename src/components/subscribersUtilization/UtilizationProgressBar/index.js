import React from 'react';
import './style.css';

const UtilizationProgressBar = ({ limit, usage, month }) => {
  const percentage = (usage / limit) * 100;
  const percentageString = percentage + '%';
  const isEmpty = () => {
    if (limit === 0 || usage === 0 || limit === undefined || usage === undefined) {
      return true;
    }
  }
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
          !isEmpty() && (
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