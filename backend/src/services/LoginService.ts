import jwt from 'jsonwebtoken'
import argon2 from 'argon2'

import { JWT_SECRET_KEY } from "../config/config"
import pool from '../db'

export const loginService = async (nome: string, senha: string) => {
    const defaultMessageError = {status: 400, message: 'Usuário ou senha inválidos'}

    try {
        const userData = await pool.query(`
            SELECT 
                id,
                nome,
                senha
            FROM usuarios
                WHERE nome = '${nome}'
        `)

        if (userData.rowCount !== 1) {
            return defaultMessageError
        }

        const user = userData.rows[0]
        if (user.senha.substring(0,7) === "$argon2") {
            if (!await argon2.verify(user.senha, senha)) {
                return defaultMessageError
            }
        } else {
            if (user.senha !== senha) {
                return defaultMessageError
            }
        }

        const data = {
            status: 200,
            id: user.id,
            nome: user.nome,
            token: jwt.sign(
                {
                    id: user.id,
                    nome: user.nome,
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