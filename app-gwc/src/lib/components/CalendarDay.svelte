<script>
    /**
	 * @type {string | number | Date}
	 */
     export let day

     const calendarDay = new Date(day);
     const isSunday = calendarDay.getDay() === 0

</script>

<li class={isSunday ? 'isSunday' : 'isWeekday'}>
    {calendarDay.getDate()}
</li>

<style>
    li {
      font-weight: 700;
      flex-grow: 1;
      list-style: none;
      aspect-ratio: 2 / 1.5;
      border: 1px solid #000;
    }
    li.isSunday {
        background-color: #000;
    }
</style>