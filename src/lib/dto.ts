import { Role } from "./type"

export type LoginDto = {
    email: string,
    password: string
}

export type RegisterDto = {
    name: string,
    email: string,
    role: Role,
    password: string,
    password_confirmation: string
}