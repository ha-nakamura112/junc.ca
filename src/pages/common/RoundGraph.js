import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';


const RoundGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartData = {
      datasets: [
        {
          data: [25, 25, 25, 25],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        },
      ],
    };
    const myChart = new Chart(chartRef.current, {
      type: 'pie',
      data: chartData,
      options: {},
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default RoundGraph;
