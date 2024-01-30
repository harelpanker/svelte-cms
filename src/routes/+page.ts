import { client } from '$lib/graphql-client';
import { legalList } from '$lib/graphql-queries';
import { fetchLegalList } from '../stores/site-metadata';

export const load = async () => {
	await fetchLegalList();

	const [legalRes] = await Promise.all([client.request(legalList)]);
	const { legals } = legalRes;

	return {
		legals
	};
};
