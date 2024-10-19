import { db, eq, History } from "astro:db";

export default async function getHistoryDatabase(id: string) {
  const data = (await db.select().from(History)).find(
    (history) => history.image_identifier === id
  );

  return data ?? null;
}
