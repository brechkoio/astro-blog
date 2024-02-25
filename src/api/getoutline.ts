interface CollectionsData {
	urlId: string;
	name: string;
	permission: boolean
}

interface DocumentsData {
	id: string;
	title: string;
	urlId: string;
	text: string;
	emoji: string;
	createdAt: string;
}
const baseUrl = "https://app.getoutline.com/api/";

const setOptions = (bodyOptions = {}) => {
	return {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			accept: 'application/json',
			Authorization:
				'Bearer ol_api_0lH9OPfWLqBj9tKRucufyBIJjkSzK051fYAbcO'
		},
		body: JSON.stringify(bodyOptions)
	}
}

//Отримуємо перелік всіх колекцій
export const fetchAllCollections = async (bodyOptions?:string) => {
	const collectionsPath = "collections.list";

	try {

		const response = await fetch(`${baseUrl}${collectionsPath}`, setOptions(bodyOptions));

		if (!response.ok) {
      		throw new Error('Network response was not ok');
    	}

		const data: CollectionsData[] = await response.json().then((body) => body.data);
		return data;
	} catch (error) {
		throw new Error('Fetch to collections.list return error');
	}
}

//Отримуємо перелік всіх документів в колекції, в body потрібно передати IP колекції
export const fetchAllDocuments = async (bodyOptions?:object) => {
	const collectionsPath = "documents.list";

	try {
		const response = await fetch(`${baseUrl}${collectionsPath}`, setOptions(bodyOptions));

		if (!response.ok) {
      		throw new Error('Network response was not ok');
    	}

		const data: DocumentsData[] = await response.json().then((body) => body.data);
		return data;
	} catch (error) {
		throw new Error('Fetch to documents.list return error');
	}
}

export const fetchDocument = async (bodyOptions?:object) => {
	const collectionsPath = "documents.info";

	try {
		const response = await fetch(`${baseUrl}${collectionsPath}`, setOptions(bodyOptions));

		if (!response.ok) {
      		throw new Error('Network response was not ok');
    	}

		const data: DocumentsData[] = await response.json().then((body) => body.data);
		return data;
	} catch (error) {
		throw new Error('Fetch to documents.list return error');
	}
}