export type Role = 'admin' | 'user';

export type Status = 'pending' | 'success' | 'failed';

export type Category = {
    id: string | number,
    name: string
}

export type User = {
    id: string | number,
    name: string,
    role: Role,
    email: string,
    img_url?: string
}

export type Game = {
    id: string | number,
    title: string,
    description: string,
    category: Category,
    img_url: string,
    currency_name: string,
    products: Product[]
}

export type Product = {
    id: string | number,
    amount: number,
    price: number,
    original_price?: number,
    game: Game,
    img_url: string
}

export type Order = {
    id: string | number,
    user: User,
    product: Product,
    status: Status
}

export type OptionType = {
    value: string | number,
    label: string
}

export type LoginFormState = | {
    errors?: {
        email?: string[],
        password?: string[]
    },
    message?: string
} | undefined

export type SessionPayload = {
    token: string,
    expiresAt: Date
}

export type RegisterFormState = | {
    errors?: {
        name?: string[],
        email?: string[],
        password?: string[],
        password_confirmation?: string[]
    },
    message?: string
} | undefined