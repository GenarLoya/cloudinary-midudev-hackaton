import { turso } from "../turso";

export default async function getAllHistoryDatabase() {
  // Buscar el registro con el identificador de imagen dado
  const { rows } = await turso.execute({
    sql: `SELECT * FROM history`,
    args: [],
  });

  // Retornar el primer resultado si existe, o `null` si no hay coincidencias
  return rows;
}
