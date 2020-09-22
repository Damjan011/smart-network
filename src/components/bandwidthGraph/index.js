import React from 'react';
import './style.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  {
      uv: [
      {name: 'aaaa', a : 2},
      {name: 'aaaa',a : 4},
      {name: 'aaaa',a: 6},
      {name: 'aaaa', a: 2},
      {name: 'aaaa',a : 1},
      {name: 'aaaa',a : 4},
      {name: 'aaaa',a: 1},
      {name: 'aaaa',a: 4}
    ], pv: 7.2, amt: 9,
  },

];

const BandwidthGraph = ({ }) => {
//   let ee = data.map(nested => nested.uv.map(element => element));

//   let damjan = function() { 
//     for ( let i = 0; i< ee.length; i++) {
//     var boban = ee[i];
//   }
// return boban;}

//   console.log(ee)

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
          <XAxis tickLine={false} dataKey='name' />
          
          <YAxis tickLine={false} orientation="right" type="number" domain={[0, 8]} />
          {
          data.map(el =>(
            <Line dataKey='a' data={el.uv} stroke="#6EE294" strokeWidth="4" dot={false} />
            
          )
          )
          
          }
          
          {/* <Line dataKey="pv" stroke="#5F72FF" strokeWidth="4" dot={false} activeDot={{ r: 8 }} /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BandwidthGraph;