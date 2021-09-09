import { Secret } from "jsonwebtoken"

export const DATABASE = {    
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
    connectionTimeoutMillis: 10000
}

export const JWT_SECRET_KEY: Secret = process.env.JWT_SECRET_KEY || ''