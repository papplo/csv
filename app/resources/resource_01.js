import Chart from 'chart.js/auto';
// import 'chartjs-adapter-date-fns';
// import {se} from 'date-fns/locale';

export async function setupResources(targetElement, dataset) {

  
  const { data, dataUPV } = dataset
  console.log(dataUPV)

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
  plugins: {
    axes: {
      labels: {
        font: {
          size: 18,
          family: 'Source Serif Pro',
          weight: 'bold',
          color: '#fff'
        }
      }
    },
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