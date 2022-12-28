import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
// import {se} from 'date-fns/locale';

export async function setupResources(targetElement, dataset) {
  const { data, dataUPV } = dataset
  new Chart(
    targetElement,
    {
      options,
      data: {
        datasets: [
          {
            type: 'bar',
            label: 'Avläst elanvändning per dag: kWh',
            data: dataUPV.map(row => ({x: row.date, y: parseInt(row.kWh)}))
          },
          {
            type: 'bar',
            label: 'Medeltemperatur dygn, 2022',
            data: data.map(row => ({x: row.date, y: row.avgTemp}))
          },
        ]
      }
    }
  );
};


const options = {
  animation: false,
  scales: {
    x: {
        type: 'time',
        display: true,
        offset: true,
        time: {
          unit: 'month'
        },
        min: new Date('2021-12-25').valueOf(),
        max: new Date('2022-12-25').valueOf()
    },
    y: {
        type: 'linear',
        min: -15,
        max: 60
    }
  },
  plugins: {
    legend: { 
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 18,
          family: 'Source Serif Pro',
          weight: 'bold',
          color: '#fff'
        }
      }
    }
  }
}

// const options = {
//   scales: {
//     x: {
//       type: 'time',
//       display: true,
//       offset: true,
//       time: {
//         unit: 'day'
//       }
//     },
//     // adapters: {
//     //   date: {
//     //     locale: 'se'
//     //   }
//     // }
//   },
// }