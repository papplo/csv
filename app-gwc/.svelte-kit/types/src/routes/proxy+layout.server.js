// @ts-nocheck
import { redirect } from '@sveltejs/kit';
 
/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export function load({ params }) {
  
  if (!params.slug) {
    const today = new Date(),
      month = today.getMonth(),
      year = today.getFullYear(),
      date = today.getDate()
    throw redirect(307, `/timeline/${year}-${monthNames[month]}`);
  }
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];