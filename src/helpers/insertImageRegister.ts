import { turso } from "../turso";

export default async function insertImageRegister(
  id: string,
  username: string,
  history: string
) {
  // Buscar el registro con el identificador de imagen dado
  const { rows } = await turso.execute({
    sql: `SELECT * FROM history WHERE image_identifier = ?`,
    args: [id],
  });

  const data = rows.length > 0 ? rows[0] : null;

  if (!data) {
    // Si no existe, insertar un nuevo registro
    await turso.execute({
      sql: `INSERT INTO history (username, image_identifier, generated_history, stamp) VALUES (?, ?, ?, ?)`,
      args: [username, id, history, new Date()],
    });
    return { msg: "Registro insertado exitosamente" };
  }

  console.log(data);

  const findId = data.id;

  // Si existe, actualizar el registro existente
  await turso.execute({
    sql: `UPDATE history SET username = ?, image_identifier = ?, generated_history = ?, stamp = ? WHERE id = ?`,
    args: [username, id, history, new Date(), findId],
  });
}
