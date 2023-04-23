import React, { useEffect } from 'react';
import { createChart } from 'lightweight-charts';

function Chart() {
  useEffect(() => {
    const chart = createChart(document.getElementById('chart'), { /* chart options */ });
    const lineSeries = chart.addLineSeries({ /* series options */ });

    // Add data to the series
    lineSeries.setData([
      { time: '2022-01-01', value: 100 },
      { time: '2022-01-02', value: 120 },
      { time: '2022-01-03', value: 90 },
      { time: '2022-01-04', value: 110 },
      { time: '2022-01-05', value: 95 },
    ]);

    // Cleanup function to remove the chart when the component unmounts
    return () => {
      chart.remove();
    }
  }, []);

  return <div id="chart" style={{ width: '100%', height: '300px' }}></div>;
}

export default Chart;
