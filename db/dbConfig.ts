import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();
const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env;

const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
    }
  : {
      host: PG_HOST,
      port: Number(PG_PORT),
      database: PG_DATABASE,
      user: PG_USER,
    };

const pgp = pgPromise();
const db = pgp(cn);

export default db;
