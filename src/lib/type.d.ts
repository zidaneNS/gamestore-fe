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
    category_id: string | number,
    img_url: string,
    currency_name: string
}

export type Product = {
    id: string | number,
    amount: number,
    price: number,
    original_price?: number,
    game_id: string | number,
    img_url: string
}

export type Order = {
    id: string | number,
    user_id: string | number,
    product_id: string | number,
    status: Status
}

export type OptionType = {
    value: string | number,
    label: string
}