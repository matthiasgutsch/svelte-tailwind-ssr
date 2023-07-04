import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchCountries } from '$lib/server/api';

export const load: PageServerLoad = async ({setHeaders}) => {
  try {
	const params = {limit: 1};
    const countries = await fetchCountries(params);
    setHeaders({ 'cache-control': 'max-age=360' });
		return { countries };
	} catch (err) {
		throw error(404, {
			message: 'Country details not found'
		})
	}
}
