// @ts-nocheck
/** @param {Parameters<import('../$types').PageLoad>[0]} event */
export function load({ params }) {
  const [year, month] = params.slug.split('-');
  const d = new Date(year);
    return {
      post: {
        title: `Calendar for ${year}`,
        d: d,
        content: `${month.split('').map((l, index) => index === 0 ? l.toUpperCase() : l).join('')}`
      }
    };
  }


  