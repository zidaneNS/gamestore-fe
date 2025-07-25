'use server';

import { NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL;

export async function GET() {
    try {
        const response = await fetch(`${baseUrl}/games`, {
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