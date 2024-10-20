import type { Row } from "@libsql/client";
import { turso } from "../turso";

export default async function getOneHistoryDatabase(id: string) : Promise<Row | null> {
  // Buscar el registro con el identificador de imagen dado
  const { rows } = await turso.execute({
    sql: `SELECT * FROM history WHERE image_identifier = ?`,
    args: [id],
  });

  // Retornar el primer resultado si existe, o `null` si no hay coincidencias
  return rows.length > 0 ? rows[0] : null;
}
