/** @type {import('../[slug]/$types').PageLoad} */

export function load({ params }) {
  const [year, month] = params.slug.split('-');

  const d = new Date(`${year}, ${month}, 01, 13:00:00`);
  const weekDay = d.getDay();
  const defaultAmountOfWeeks = 4;


  let calendarData = [];
  const sequence = new CalendarSequence(d, defaultAmountOfWeeks, weekDay)
  for (const week of sequence) {
    calendarData.push(week.days);
  }

  return {
    response: {
      title: `Calendar for ${year}`,
      calendarData,
      startWeek: 0,
      content: `${month.split('').map((l, index) => index === 0 ? l.toUpperCase() : l).join('')}`
    }
  };
}


/* 
 * Iterator logic
*/
class CalendarSequence {
  constructor(start = new Date(), weeks = 4, startOfweek = 1 /* day that week starts on*/) {
    this.caledarStart = start;
    this.startWeek = startOfweek;
    this.endWeek = weeks
    this.startOfWeek = startOfweek;
  }
  [Symbol.iterator]() {
    let initWeekZerofrom = this.startOfWeek;
    let nextDay = this.caledarStart;
    let weekCounter = this.endWeek;
    let nextIndex = this.startWeek;
    return {
      next: () => {
        if (nextIndex <= weekCounter) {
          const days = getCalendarDaysForWeek(nextDay, initWeekZerofrom);
          let result = {
            value:
            {
              week: nextIndex,
              days
            },
            done: false
          }
          nextDay = passDays(1, days[6]);
          nextIndex++;
          initWeekZerofrom = 0;
          return result;
        }

        return {
          value:
          {
            week: nextIndex,
            days: [this.caledarStart]
          },
          done: true
        };
      }
    }
  }
};


/**
 * @param {Date} startDate
 * @param {number} offsetWeekDays
 * @returns [1..7] days from startDate, parsed from offset
 */
function getCalendarDaysForWeek(startDate, offsetWeekDays) {
  let weekDays = new Array(7);
  for (let index = offsetWeekDays; index < weekDays.length; index++) {
    weekDays[index] = passDays(index, startDate)
  }
  return weekDays
}

/**
 * @param {{getTime: () => number;}} date
 * @param {number} amount
 * @returns [date] + (-)[amount] days
 */
function passDays(amount, date) {
  return new Date(date.getTime() + ((24 * 60 * 60 * 1000) * amount));
}