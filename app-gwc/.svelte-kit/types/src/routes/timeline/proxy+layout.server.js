// @ts-nocheck
import { redirect } from '@sveltejs/kit';
 
/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export function load({ params }) {
  if (!params.slug) {
    throw redirect(307, '/2023');
  }
}