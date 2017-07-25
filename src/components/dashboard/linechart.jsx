import React from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from 'Victory';


const LineChart = (props) => {
  const dateCount = props.jobs.reduce((acc, curr) => {
    const dateString = new Date(curr.updatedAt).toDateString();
    (acc[dateString]) ? acc[dateString] += 1 : acc[dateString] = 1;
    return acc;
  }, {});
  const keys = Object.keys(dateCount);
  const values = Object.values(dateCount);
  const data = keys.reduce((acc, curr, idx) => {
    acc.push({ x: new Date(curr), y: values[idx] });
    return acc;
  }, []);
  return (
    <VictoryChart
      scale={{ x: 'time' }}
    >
      <VictoryLine
        style={{
          data: { stroke: 'tomato' },
        }}
        scale={{ x: 'time' }}
        data={data}
      />
      <VictoryAxis />

    </VictoryChart>
  );
};
export default LineChart;
