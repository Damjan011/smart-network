import React from 'react';
import './style.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { findDOMNode } from 'react-dom';

const data = [
  {
    name: '12 AM', uv: [1,2,3,4], pv: 7.2, amt: 9,
  },
  {
    name: '3 AM', uv: [1,2,3,4], pv: 3.7, amt: 5,
  },
  {
    name: '6 AM', uv: [2,2,3,4], pv: 1, amt: 4,
  },
  {
    name: '9 AM', uv: [1,5,3,4], pv: 5, amt: 3,
  },
  {
    name: '12 PM', uv: [1,2,3,4], pv: 6, amt: 4,
  },
  {
    name: '3 PM', uv: [1,6,3,4], pv: 4, amt: 5,
  },
  {
    name: '6 PM', uv: [9,2,3,4], pv: 7, amt: 5,
  },
  {
    name: '12 AM', uv: [1,2,3,4], pv: 7.2, amt: 9,
  },
  
];




const BandwidthGraph = ({ }) => {
  let ee = data.map(nested => nested.uv.map(element => element));

  let damjan = function() { 
    for ( let i = 0; i< ee.length; i++) {
    var boban = ee[i];
  }
return boban;}

  console.log(damjan)

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
          <CartesianGrid position="right" strokeDasharray="2 2" />
          <XAxis tickLine={false}  dataKey="name" interval={2}/>
          <YAxis tickLine={false} orientation="right" type="number" domain={[0, 8]} />
          <Line dataKey={ee} stroke="#6EE294" strokeWidth="4" dot={false} />
          {/* <Line dataKey="pv" stroke="#5F72FF" strokeWidth="4" dot={false} activeDot={{ r: 8 }} /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BandwidthGraph;