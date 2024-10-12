import { db, History } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(History).values([
		{ id: 1, username: 'test-username', image_identifier: 'cld-sample-5', generated_history: 'This is a test generated history', stamp: new Date() },
		{ id: 2, username: 'second-user', image_identifier: 'cld-sample-2', generated_history: 'This is a test generated history for cld-sample-2', stamp: new Date() },
	])
}
