import { Secret } from "jsonwebtoken"

export const DATABASE = {    
    user: 'wwqvmxvxkdgupq',
    host: 'ec2-34-228-100-83.compute-1.amazonaws.com',
    database: 'dk6mt61t0piat',
    password: 'b22e868d1ff9498693ca28a17bdd4f07612965e081d435cd9a3050daba1f0411',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
    connectionTimeoutMillis: 10000
}

export const JWT_SECRET_KEY: Secret = '5641lkzis4!@#@!#45124ASD2!$6'