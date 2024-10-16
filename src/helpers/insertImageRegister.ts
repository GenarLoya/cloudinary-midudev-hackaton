import { db, eq, History } from "astro:db";

export default async function insertImageRegister(id: string, username: string, history: string) {
  const data = (await db.select().from(History)).find(history => history.image_identifier === id)

  if (!data) {
    return await db.insert(History).values({username, image_identifier: id, generated_history: history, stamp: new Date() })    
  }

  console.log(data)

  const findId = data.id

  return await db.update(History).set({
    username,
    image_identifier:id,
    generated_history: history,
    stamp:new Date()
  }).where(eq(History.id, findId))
}