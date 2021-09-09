import jwt from 'jsonwebtoken'
import argon2 from 'argon2'

import { JWT_SECRET_KEY } from "../config/config"
import pool from '../db'

export const loginService = async (name: string, password: string) => {
    const defaultMessageError = {status: 400, message: 'Usuário ou senha inválidos'}

    try {
        const userData = await pool.query(`
            SELECT 
                id,
                name,
                password
            FROM users
                WHERE name = '${name}'
        `)

        if (userData.rowCount !== 1) {
            return defaultMessageError
        }

        const user = userData.rows[0]
        if (user.password.substring(0,7) === "$argon2") {
            if (!await argon2.verify(user.password, password)) {
                return defaultMessageError
            }
        } else {
            if (user.password !== password) {
                return defaultMessageError
            }
        }

        const data = {
            status: 200,
            id: user.id,
            name: user.name,
            token: jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                }, 
                JWT_SECRET_KEY
            )
        }
        return data
    } catch (e) {
        console.error(e)
        return defaultMessageError
    }
}