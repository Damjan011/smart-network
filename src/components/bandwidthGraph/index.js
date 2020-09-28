import React from 'react';
import './style.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    name: '12 AM', uv: 3, pv: 2, amt: 2400,
  },
  {
    name: '3 AM', uv: 3.5, pv: 2.1, amt: 2210,
  },
  {
    name: '6 AM', uv: 5, pv: 2.8, amt: 2290,
  },
  {
    name: '9 AM', uv: 4.4, pv: 2.4, amt: 2000,
  },
  {
    name: '12 PM', uv: 3, pv: 1.9, amt: 2181,
  },
  {
    name: '3 PM', uv: 3.3, pv: 2, amt: 2500,
  },
  {
    name: '6 PM', uv: 5, pv: 2.5, amt: 2100,
  },
  {
    name: '9 PM', uv: 5, pv: 2.5, amt: 2100,
  },
  {
    name: '12 AM', uv: 6.5, pv: 3, amt: 2400,
  },
  {
    name: '3 AM', uv: 5, pv: 2.7, amt: 2210,
  },
  {
    name: '6 AM', uv: 4.2, pv: 2.1, amt: 2290,
  },
  {
    name: '9 AM', uv: 2, pv: 1.9, amt: 2000,
  },
  {
    name: '12 PM', uv: 3.2, pv: 2.1, amt: 2181,
  },
  {
    name: '3 PM', uv: 7, pv: 3, amt: 2500,
  },
  {
    name: '6 PM', uv: 5, pv: 2.5, amt: 2100,
  },
  {
    name: '9 PM', uv: 6, pv: 2.6, amt: 2100,
  },
  {
    name: '3 PM', uv: 4.1, pv: 2.2, amt: 2500,
  },
  {
    name: '6 PM', uv: 6, pv: 3, amt: 2100,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip" >
        <div className="ui-tooltip-top">
          <div className="ui-tooltip-label">
            <p>{label}</p>
          </div>
          <div className="ui-tooltip-values">
            <div className="ui-tooltip-green">
              <p>{payload[0].value} Kb</p>
            </div>
            <div className="ui-tooltip-blue">
              <p>{payload[1].value} Mb</p>
            </div>
          </div>
        </div>
        <div className="ui-tooltip-body">
          <div className="ui-tooltip-row">
            <div className="ui-tooltip-image-wrapper">
              <img className="ui-tooltip-image" src={require('../../assets/images/arrow-dl.png')} alt="Tooltip user" />
            </div>
            <div className="ui-tooltip-row-label">
              <p>Alice</p>
            </div>
          </div>
          <div className="ui-tooltip-row">
            <div className="ui-tooltip-image-wrapper">
              <img className="ui-tooltip-image" src={require('../../assets/images/smiley-happy.png')} alt="Tooltip service" />
            </div>
            <div className="ui-tooltip-row-label">
              <p>Netflix Streaming Services</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const BandwidthGraph = ({ }) => {
  return (
    <div id="bandwidth-usage" className="ui-box" style={{ padding: '20px' }}>
      <div className="ui-graph-labels">
        <div className="ui-graph-labels-inner">
          <div className="ui-graph-main-label">
            <p>Bandwidth Usage</p>
          </div>
          <div className="ui-graph-time-label">
            <p>1 hour</p>
          </div>
        </div>
        <div className="ui-graph-date-label">
          <p>24 Jan 2020</p>
        </div>
      </div>
      <ResponsiveContainer width='100%'
        height={180}>
        <LineChart
          margin={{
            top: 0, right: -45, left: 0, bottom: 0,
          }}
          data={data}>
          <CartesianGrid position="right" strokeDasharray="3 3" />
          <XAxis tick={{ dx: 20 }} interval={2} tickLine={false} dataKey='name' />
          <YAxis tickLine={false} orientation="right" type="number" domain={[0, 8]} />
          <Tooltip cursor={false} allowEscapeViewBox={{ x: true, y: true }} content={<CustomTooltip />} />
          <Line dataKey="uv" stroke="#6EE294" strokeWidth="4" dot={false} />
          <Line dataKey="pv" stroke="#5F72FF" strokeWidth="4" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BandwidthGraph;