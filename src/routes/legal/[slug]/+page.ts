import { client } from '$lib/graphql-client';
import { legalItem } from '$lib/graphql-queries';
import { fetchLegalList } from '../../../stores/site-metadata.js';

export const load = async ({ params }) => {
	await fetchLegalList();

	const { slug } = params;
	const variables = { slug };
	const { legal } = await client.request(legalItem, variables);

	return {
		legal
	};
};
