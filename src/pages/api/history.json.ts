import type { APIRoute } from "astro";
import { db, History } from "astro:db";

export const GET: APIRoute = async ({params, request}) => {
    const data = await db.select().from(History);
    return new Response(JSON.stringify({
        data
    }))
}

export const POST: APIRoute = async ({request}) => {
    try {
        const body = await request.json();
        const {
            username,
            image_identifier,
            generated_history,
            stamp
        } = body;
        
        await db.insert(History).values({username, image_identifier, generated_history, stamp: new Date(stamp) })

        return new Response(JSON.stringify({
            msg: 'TEST'
        }))
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({
            msg: 'TEST'
        }))
    }
}