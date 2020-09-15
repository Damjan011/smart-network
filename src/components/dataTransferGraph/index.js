import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './style.css';

// const data = [
//   {
//     name: '12 AM', uv: [
//       {value: 2},
//       {value: 6},
//       {value: 1},
//       {value: 3},
//     ], pv: 6,  amt: 9,
//   },
//   {
//     name: '12 AM', uv: [
//       {value: 2},
//       {value: 6},
//       {value: 1},
//       {value: 3},
//     ], pv: 6,  amt: 9,
//   },
//   {
//     name: '12 AM', uv: [
//       {value: 2},
//       {value: 6},
//       {value: 1},
//       {value: 3},
//     ], pv: 6,  amt: 9,
//   },
//   {
//     name: '12 AM', uv: [
//       {value: 2},
//       {value: 6},
//       {value: 1},
//       {value: 3},
//     ], pv: 6,  amt: 9,
//   },
//   {
//     name: '12 AM', uv: [
//       {value: 2},
//       {value: 6},
//       {value: 1},
//       {value: 3},
//     ], pv: 6,  amt: 9,
//   },


// ];

const series = [
  {name: 'Series 1', data: [
    { value: Math.random()},
    {value: Math.random()},
    {value: Math.random()}
  ]},
  {name: 'Series 2', data: [
    {value: Math.random()},
    {damjan: 'damjan', value: Math.random()},
    { value: Math.random()},

  ]},
  {name: 'Series 3', data: [
    {value: Math.random()},
    { value: Math.random()},
    { value: Math.random()}
  ]},
];

const DataTransferGraph = ({ }) => {
  return (
    <div id="data-transfer" className="ui-box" style={{ padding: '20px' }}>
      <div className="ui-graph-labels">
        <div className="ui-graph-labels-inner">
          <div className="ui-graph-main-label">
            <p>Data Transfer (Mb)</p>
          </div>
          <div className="ui-graph-time-label">
            <p>3 hours</p>
          </div>
        </div>
        <div className="ui-graph-date-label">
          <p>24 Jan 2020</p>
        </div>
      </div>
      <ResponsiveContainer width='100%'
        height={180}>
        <BarChart
          margin={{
            top: 0, right: -45, left: 0, bottom: 0,
          }}
          data={series}
          >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="damjan" />
          <YAxis orientation="right" dataKey="value"/>
          {series.map(s => (<Bar dataKey='value' data={s.data} barSize={5} name={s.name} fill="#6EE294" />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DataTransferGraph;