import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { setupResources } from './resources/resource_01';

import data from './public/smhi-2022.parsed.csv';
import dataUPV from './public/UPV-20220114-20221222A.csv';

document.querySelector('#app').innerHTML = `
  <main>
    <header>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>The Semantic Layer for building data apps</h1>
      <p class="read-the-docs">
        Click on the Vite logo to learn more
        Trust your insights. Consume data from any source, organize it into consistent metrics, and use it with every data app.
      </p>
    </header>
    <aside>
    <hr>

    </aside>
    <section class="card">
      <button id="counter" type="button"></button>
    </section>

    <figcaption id="chart-legend"><h2>Formats</h2></figcaption>
    <section class="container">
      <div class="chart-container" style="position: relative; height:60vh; width:92vw;">
        <canvas id="resource_01"></canvas>
      </div>
    </section>
  </main>
`

setupCounter(document.querySelector('#counter'))
setupResources(document.querySelector('#resource_01'), {data, dataUPV});

{/* <h2 id="formats">Formats</h2>
<p>Each of these datasets is presented in one of these three formats:</p>
<ul>
<li><span style="background-color: orange; color: rgb(17, 17, 17); padding: 0px 5px; border-radius: 4px; font-weight: 800;">SQL</span> - Write SQL queries in notebooks to query and visualize the data</li>
<li><span style="background-color: seagreen; color: white; padding: 0px 5px; border-radius: 4px; font-weight: 800;">EXCEL</span> - Excel xlsx files attached to the notebook</li>
<li><span style="background-color: steelblue; color: white; padding: 0px 5px; border-radius: 4px; font-weight: 800;">API</span> - Live calls to a public API to access the data</li>
<li><span style="background-color: gray; color: white; padding: 0px 5px; border-radius: 4px; font-weight: 800;">FILES</span> - CSV or JSON files attached to the notebook</li>
</ul> */}