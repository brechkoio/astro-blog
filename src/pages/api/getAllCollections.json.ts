import { fetchAllCollections } from '../../api/getoutline';

export const GET = async () => {
	try {
		const collections = await fetchAllCollections();
		const isPermission = collections.filter(
			(collection) => collection.permission !== null
		);

		return new Response(JSON.stringify(isPermission));
	} catch (error) {
		throw new Error('Failed to fetch collections');
	}
};
