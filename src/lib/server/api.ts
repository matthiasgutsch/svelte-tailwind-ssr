import { writable } from 'svelte/store';
import type { apiWorkBrief, WorkBrief } from '$lib/models/work';
import type { User } from '$lib/models/user';

const COUNTRIES_BASE_PATH = 'https://api.matthiasgutsch.com';
const GITHUB_BASE_PATH = 'https://api.github.com/users';
const username = 'AndrewJBateman';
export const works = writable([]);
export const workDetails = writable([]);
export const userData = writable([]);
export const workImageDetails = writable([]);
export const token = 'ee'
// Fetch user Github data
export const fetchUserData = async () => {
	try {
		const apiData = await fetch(`${GITHUB_BASE_PATH}/${username}`)
			.then(response => response.json());
			userData.set(apiData);
	} catch (error) {
		throw new Error('Unable to fetch user data');
	}
};

// Fetch JSON data - 3 fields only - for all works from a REST API

export const fetchWorks = async (params: any) => {

	const init = {
		headers: {
			'Accept': 'application/json',
			'Authorization': `${token}`
		},
		params: {

		},
	};

	const { key, title } = params;
	const url = `${COUNTRIES_BASE_PATH}/products`;
	const res = await fetch(url, init);
	if (res.ok) {
		const workDetails = await res.json();
		return workDetails;
	}
	throw new Error('Unable to fetch a list of works');
  }





// Fetch JSON data on work with alpha3 code matching id from a REST API
export const fetchWorkById = async (id: string) => {
	try {
		const url = `${COUNTRIES_BASE_PATH}/products/id/${id}`;
		const res = await fetch(url);
		if (res.ok) {
			const workDetails = await res.json();
			return workDetails;
		}

	} catch (err: any) {
		throw new Error('Unable to fetch work details', err);
	}
};

export const fetchWorkImagesById = async (id: string) => {
	try {
		const url = `${COUNTRIES_BASE_PATH}/products/slideshow/${id}`;
		const res = await fetch(url);
		if (res.ok) {
			const workImageDetails = await res.json();
			return workImageDetails;
		}

	} catch (err: any) {
		throw new Error('Unable to fetch work details', err);
	}
};





