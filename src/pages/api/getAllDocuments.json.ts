import { fetchAllDocuments } from '../../api/getoutline';

export const POST = async () => {
	try {
		const documents = await fetchAllDocuments();

		return new Response(JSON.stringify(documents));
	} catch (error) {
		throw new Error('Failed to fetch collections');
	}
};
