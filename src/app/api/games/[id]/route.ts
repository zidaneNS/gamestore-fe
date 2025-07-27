'use server';

import api from "../../api";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    try {
        const response = await fetch(`${api}/games/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        return response;
    } catch (err) {
        throw new Error(`error fetching game details: ${err}`);
    }
}