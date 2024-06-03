import { writable } from 'svelte/store';
import type { apiCountryBrief, CountryBrief } from '$lib/models/work';
import type { User } from '$lib/models/user';

const COUNTRIES_BASE_PATH = 'https://api.matthiasgutsch.com';
const GITHUB_BASE_PATH = 'https://api.github.com/users';
const username = 'AndrewJBateman';
export const countries = writable([]);
export const countryDetails = writable([]);
export const userData = writable([]);
export const countryImageDetails = writable([]);
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

// Fetch JSON data - 3 fields only - for all countries from a REST API

export const fetchCountries = async (params: any) => {

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
		const countryDetails = await res.json();
		return countryDetails;
	}
	throw new Error('Unable to fetch a list of countries');
  }





// Fetch JSON data on country with alpha3 code matching id from a REST API
export const fetchCountryById = async (id: string) => {
	try {
		const url = `${COUNTRIES_BASE_PATH}/products/id/${id}`;
		const res = await fetch(url);
		if (res.ok) {
			const countryDetails = await res.json();
			return countryDetails;
		}

	} catch (err: any) {
		throw new Error('Unable to fetch country details', err);
	}
};

export const fetchCountryImagesById = async (id: string) => {
	try {
		const url = `${COUNTRIES_BASE_PATH}/products/slideshow/${id}`;
		const res = await fetch(url);
		if (res.ok) {
			const countryImageDetails = await res.json();
			return countryImageDetails;
		}

	} catch (err: any) {
		throw new Error('Unable to fetch country details', err);
	}
};





