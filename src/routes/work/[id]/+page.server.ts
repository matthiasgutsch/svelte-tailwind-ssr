import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchCountryById, fetchCountryImagesById } from '$lib/server/api';

/** @type {import('./$types').PageLoad} */
export const load: PageServerLoad = async ({ params: { id }, setHeaders }) => {
	try {
		const country = await fetchCountryById(id);
		const images = await fetchCountryImagesById(country.id);
		console.log('country: ', country);
		setHeaders({ 'cache-control': 'max-age=360' });
		return { country,images };

	} catch (err) {
		throw error(404, {
			message: 'Country details not found'
		})
	}


};