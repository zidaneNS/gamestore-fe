/*
    API requirement:
    - get all games with products, category
    - get all products with game
    - get products by game
    - get all categories
    - create orders
    - signup, signin, logout
    - get all users
    - get all orders
    - checkout product
    - get user info
    - create update category
    - create game
    - create product
    - edit game
    - edit product
    - delete game
    - delete product
    - get all users
    - update notification
    - edit user info
*/

import { Game } from "./type";

const origin = 'http://localhost:3000';

export function fetchData<T>(endpoint: string, options?: RequestInit, isFormReq?: false): Promise<T | null>
export function fetchData<T>(endpoint: string, options?: RequestInit, isFormReq?: true): Promise<T | { message: string }>

export async function fetchData<T>(endpoint: string, options?: RequestInit, isFormReq: boolean = false): Promise<T | { message: string } | null> {
    try {
        const originUrl = typeof window !== 'undefined' ? window.origin : origin;
        const response = await fetch(`${originUrl}/api/${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...options?.headers
            },
            ...options
        });

        const data = await response.json();
        if (response.status === 200 || response.status === 201) {
            return data as T;
        } else {
            if (isFormReq) {
                return { message: data.error };
            } 

            return null;
        }

    } catch (err) {
        console.log(`error fetching from endpoint: ${endpoint}`, err);
        if (isFormReq) return { message: `error fetching ${endpoint}`};
        return null;
    }
}

export const getAllGames = async () => fetchData<Game[]>('games', {
    method: 'GET',
});

export const getGame = async (id: string | number) => fetchData<Game>(`games/${id}`);

export const checkoutProduct = async (id: string | number) => fetchData<{ snapToken: string }>(`checkout/${id}`);