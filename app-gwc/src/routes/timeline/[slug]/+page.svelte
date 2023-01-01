<script>
	import CalendarDay from '$lib/components/CalendarDay.svelte';
  // import { each } from 'svelte/internal';

  /** @type {import('./$types').PageData} */
  export let data;

  </script>
  
  <header>
    <h1>{data.response.title}</h1>
    <h2>{@html data.response.content}</h2>
  </header>
  <ul class="calendar-month">
    {#each data.response.calendarData as weeks, weeksIndex} 
    <p>{weeksIndex}</p>
      <ul class="calendar-week">
        {#each weeks as weekday, weekdayIndex}
          <CalendarDay day={weekday} />
        {/each}
      </ul>
    {/each}
  </ul>
  
<style>


@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700&display=swap');
:root {
  --headings: CeraPro, "Cera Pro Regular", Inter, Avenir, Helvetica, Arial, sans-serif;
  --body: 'Source Serif Pro', serif;
  font-family: var(--body);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #343445;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

header {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: baseline;
}

.calendar-month {
  width: calc (100vw - 25px);
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 4px;
}

.calendar-week {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 30px;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  font-family: var(--headings);
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-family: var(--headings);
  font-size: 3.2em;
  line-height: 1.1;
}

#app {
  max-width: 1280px;
  width: auto;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vanilla:hover {
  filter: drop-shadow(0 0 2em #f7df1eaa);
}

#chart-legend {
  font-family: var(--body);
  font-weight: 700;
  /* text-emphasis-color: '#fff'; */
  margin-bottom: 1em;
}

.card {
  padding: 2em;
}

.read-the-docs {
  font-size: 1.45em;
  line-height: 145%;
  color: #888;
}

aside {
  font-family: var(--body);
}

hr {
  height: 1px;
  margin: 1rem 0;
  padding: 1rem 0;
  border: none;
  background: no-repeat center/100% 1px
  linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,0.9));
  }

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.8em 1.2em;
  font-size: 1.1em;
  letter-spacing: 0.05em;
  font-weight: 600;
  font-family: inherit;
  background-color: #C84367;
  color: #fff;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #343445;
    color: #fff;
  }
}

</style>