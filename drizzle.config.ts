
/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:vu9PgGmjYeK5@ep-summer-union-a5avrwn2.us-east-2.aws.neon.tech/CODE_CRAFT_AI?sslmode=require',
    }
  };