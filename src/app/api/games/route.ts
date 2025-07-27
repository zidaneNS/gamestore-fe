'use server';

import api from "../api";

export async function GET() {
    try {
        const response = await fetch(`${api}/games`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        return response;
    } catch (err) {
        throw new Error('error fetching games: ' + err);
    }
}