import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { LinearScale } from 'chart.js/auto';

Chart.register(LinearScale);

function BloodPressureChart({ data }) {
  const chartData = {
    labels: data.map(item => `${item.month} ${item.year}`),
    datasets: [
      {
        label: 'Systolic',
        data: data.map(item => item.blood_pressure.systolic.value),
        borderColor: '#E66FD2 ',
        backgroundColor:'transparent',
        fill: true,
        tension: 0.4,
        pointRadius:7,
        pointBackgroundColor: '#E66FD2 '
      },
      {
        label: 'Diastolic',
        data: data.map(item => item.blood_pressure.diastolic.value),
        borderColor: '#8C6FE6 ',
        backgroundColor:'transparent',
        fill: true,
        tension: 0.4,
        pointRadius:7,
        pointBackgroundColor: '#8C6FE6 '
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
        suggestedMin: 60,
        suggestedMax: 180,
        grid: {
          drawBorder: false
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    },
    plugins: {
      
            legend: {
              display: false
            }

            }
  };

  return <Line data={chartData} options={options} />;
}

export default BloodPressureChart;
