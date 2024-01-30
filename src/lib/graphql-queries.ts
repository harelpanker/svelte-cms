import { gql } from 'graphql-request';

export const legalList = gql`
	query GetLegalsList {
		legals {
			id
			title
			slug
		}
	}
`;

export const legalItem = gql`
	query GetLegalsItem($slug: String!) {
		legal(where: { slug: $slug }) {
			slug
			title
			summery
			body {
				html
			}
		}
	}
`;
