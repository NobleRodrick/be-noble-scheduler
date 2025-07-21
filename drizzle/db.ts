import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema"

// Initialize the neon client using the DATABASE_URL form our environment variables
const sql = neon(process.env.DATABASE_URL!);

//create and export the Drizzle ORM instance, with the neon client and schema fo type-safe queries
export const db = drizzle(sql, {schema})