import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
// import {se} from 'date-fns/locale';

import { htmlLegendPlugin } from './chart_plugins';

export async function setupResources(targetElement, dataset) {
  const { data, dataUPV } = dataset
  new Chart(
    targetElement,
    {
      options,
      plugins: [htmlLegendPlugin],
      data: {
        datasets: [
          {
            backgroundColor: '#4A895C',
            type: 'bar',
            borderWidth: 1,
            radius: 0,
            label: 'Avläst elanvändning per dag: kWh',
            data: dataUPV.map(row => ({ x: row.date, y: parseInt(row.kWh) }))
          },
          {
            backgroundColor: '#F2A93B',
            type: 'line',
            borderColor: '#F2A93B',

            label: 'Medeltemperatur dygn, 2022',
            data: data.map(row => ({ x: row.date, y: row.avgTemp }))
          },
          {
            backgroundColor: '#808080',
            type: 'bubble',
            label: 'Besök',
            data: [
              { x: '2022-03-19', y: 59, z: 190 },
              { x: '2022-03-20', y: 59, z: 190 },
              { x: '2022-04-15', y: 59, z: 190 },
              { x: '2022-04-17', y: 59, z: 190 }
            ]
          }
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
      offset: false,
      grid: {
        // color: '#666666'
      },
      time: {
        unit: 'month',
      },
      ticks: {
        align: 'start'
      },
      min: new Date('2021-12-25').valueOf(),
      max: new Date('2022-12-25').valueOf()
    },
    y: {
      type: 'linear',
      min: -15,
      max: 60,
      grid: {
        // color: '#666666'
      }
    }
  },
  plugins: {
    htmlLegend: {
      // ID of the container to put the legend in
      containerID: 'chart-legend',
    },
    legend: {
      display: false,
    }
  },
}
