import fs from 'fs';

import { fetchCollectionsDocuments, fetchAllDocuments, fetchDocument } from "../api/getoutline";

const outputDir = './src/content/blog';
const baseID = "6708fe89-670a-4067-a0c6-372fb35c060e";


const formatFolder = (string) => {
	return string.toLowerCase().split(' ').join('_');
}

const formatFile = (string) => {
	return string.split(' ').slice(4, -1).join('_');
}


async function fetchDataAndCreateMarkdown() {
	try {

		const collections = await fetchCollectionsDocuments({ id: baseID });
		const documents = await fetchAllDocuments({ id: baseID });

		if (!collections) {
			console.error('Не вдалося отримати дані з API.');
			return;
		}

		if (!fs.existsSync(outputDir)) {
			fs.mkdirSync(outputDir);
		}

		collections.map((collection) => {
			//перевірка чи є папка "blog" і чи permission не null
			if (!fs.existsSync(`${outputDir}/${formatFolder(collection.title)}`)) {
				fs.mkdirSync(`${outputDir}/${formatFolder(collection.title)}`);
			}

			collection.children.map((child) => {


				documents.map((document) => {
					console.log(child.id, document.id);
					if (child.id == document.id) {
						// const filename = formatFile(document.url);
						// const filepath = `${outputDir}/${formatFolder(collection.title)}/${filename}.md`;


						// const markdownContent = `---\n
						// 	collectionTitle:${collection.title}\n
						// 	documentTitle:${document.title}\n
						// 	createdAt:${document.createdAt}\n
						// 	updatedAt:${document.updatedAt}
						// 	\n---\n
						// 	${doc.text}`;

						// fs.writeFileSync(filepath, markdownContent);
						console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!_______________________-');
					} else {
						console.log('Не співпало');
					}
				})
			})

		})
	} catch (error) {
		console.error('Помилка:', error.message);
	}
}

export default fetchDataAndCreateMarkdown;