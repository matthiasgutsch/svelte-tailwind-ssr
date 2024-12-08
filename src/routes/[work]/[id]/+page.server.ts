import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchWorks, fetchWorkById, fetchWorkImagesById } from '$lib/server/api';

/** @type {import('./$types').PageLoad} */
export const load: PageServerLoad = async ({ params: { id }, setHeaders }) => {
	try {
		const work = await fetchWorkById(id);
		const images = await fetchWorkImagesById(work.id);

		const params = {limit: 1};

		
		console.log('work: ', work);
		setHeaders({ 'cache-control': 'max-age=360' });
		return { work,images };

	} catch (err) {
		throw error(404, {
			message: 'Work details not found'
		})
	}


};


