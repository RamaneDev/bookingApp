import React from 'react'
import './chart.scss'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ aspect, title }) => {
  const data = [
    {
      name: 'January',
      Total: 2400
    },
    {
      name: 'February',
      Total: 1398
    },
    {
      name: 'March',
      Total: 9800
    },
    {
      name: 'April',
      Total: 3908
    },
    {
      name: 'May',
      Total: 4800
    },
    {
      name: 'June',
      Total: 3800
    }
  ];
  return (
    <div className='chart'>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <XAxis dataKey="name" stroke='gray' />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Total" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart