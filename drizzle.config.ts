import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.DB_HOST || "",
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "",
    ssl: {
      rejectUnauthorized: false,
    },
  },
  verbose: true,
  strict: true,
} satisfies Config;
