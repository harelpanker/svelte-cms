import { client } from '$lib/graphql-client';
import { legalList } from '$lib/graphql-queries';
import { writable } from 'svelte/store';

export const legalsStore = writable([]);

export const fetchLegalList = async () => {
	const { legals } = await client.request(legalList);
	return legalsStore.set(legals[0]);
};
