import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./db/schema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Bypasses cert validation
  },
});

const db = drizzle(pool, { schema });

export { db };
export * from "./db/schema";
