import { redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').LayoutServerLoad} */
export function load({ params }) {
  
  if (!params.slug) {
    const today = new Date(),
      month = today.getMonth(),
      year = today.getFullYear()
    throw redirect(307, `/timeline/${year}-${monthNames[month]}`);
  }
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];