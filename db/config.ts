import { column, defineDb, defineTable } from 'astro:db';

const History = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    username: column.text(),
    image_identifier: column.text(),
    generated_history: column.text(),
    stamp: column.date(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    History,
  }
});
