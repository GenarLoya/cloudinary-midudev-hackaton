import type { APIRoute } from "astro";
import { turso } from "../../turso";

export const GET: APIRoute = async ({params, request}) => {
    const { rows } = await turso.execute(`SELECT * FROM history`);
    return new Response(JSON.stringify({
        data: rows
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
        
        await turso.execute({
            sql: `INSERT INTO history (username, image_identifier, generated_history, stamp) VALUES (?, ?, ?, ?)`,
            args: [username, image_identifier, generated_history, new Date(stamp)]
        });

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