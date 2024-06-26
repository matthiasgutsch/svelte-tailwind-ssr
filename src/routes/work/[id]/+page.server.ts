import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchCountries, fetchCountryById, fetchCountryImagesById } from '$lib/server/api';

/** @type {import('./$types').PageLoad} */
export const load: PageServerLoad = async ({ params: { id }, setHeaders }) => {
	try {
		const country = await fetchCountryById(id);
		const images = await fetchCountryImagesById(country.id);
		const params = {limit: 1};
	  	const countries = await fetchCountries(params);
		console.log('country: ', country);
		setHeaders({ 'cache-control': 'max-age=360' });
		return { country,images };

	} catch (err) {
		throw error(404, {
			message: 'Country details not found'
		})
	}


};


