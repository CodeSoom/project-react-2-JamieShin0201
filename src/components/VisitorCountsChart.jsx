import React from 'react';

import {
  VictoryLine,
  VictoryChart,
  VictoryTooltip,
  VictoryScatter,
} from 'victory';

export default function VisitorCountsChart({ visitorCounts }) {
  function makeDataforChart(value) {
    const data = value.map(({
      date: {
        year, month, day, hour, min,
      }, count,
    }) => ({ x: new Date(year, month, day, hour, min), y: count }));

    return data;
  }

  const chartData = makeDataforChart(visitorCounts);

  return (
    <>
      <VictoryChart
        width={550}
        height={300}
        scale={{ x: 'time' }}
      >
        <VictoryLine
          style={{
            data: { stroke: 'tomato' },
          }}
          data={chartData}
        />
        <VictoryScatter
          style={{ data: { fill: 'black' }, labels: { fill: 'black', fontSize: 6 } }}
          data={chartData}
          labels={({ datum }) => `${datum.x.toLocaleString()} \n 방문자수 : ${datum.y}명`}
          labelComponent={(
            <VictoryTooltip flyoutPadding={({ text }) => (text.length > 1
              ? {
                top: 7, bottom: 7, left: 7, right: 7,
              }
              : 7)}
            />
          )}
        />
      </VictoryChart>
    </>
  );
}
