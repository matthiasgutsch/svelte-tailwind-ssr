import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchWorks } from '$lib/server/api';

export const load: PageServerLoad = async ({setHeaders}) => {
  try {
	const params = {limit: 1};
    const works = await fetchWorks(params);
    setHeaders({ 'cache-control': 'max-age=360' });
		return { works };
	} catch (err) {
		throw error(404, {
			message: 'Work details not found'
		})
	}
}
