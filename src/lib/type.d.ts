export type Category = {
    id: string | number,
    name: string
}

export type User = {
    id: string | number,
    role_id: string | number,
    email: string,
    img_url?: string
}

export type Game = {
    id: string | number,
    title: string,
    description: string,
    popular: boolean,
    category_id: string | number,
    img_url: string,
    digiflazz_brand?: string
}

export type Product = {
    id: string | number,
    name: string,
    amount: string,
    price: number,
    original_price?: number,
    game_id: string | number,
    img_url: string
}

export type OptionType = {
    value: string | number,
    label: string
}