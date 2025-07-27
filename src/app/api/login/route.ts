import { NextRequest } from "next/server";
import api from "../api";

export async function POST(req: NextRequest) {
    const body = await req.json();
    
    try {
        const response = await fetch(`${api}/login`, {
            method: req.method,
            headers: req.headers,
            body: JSON.stringify(body)
        });

        return response;
    } catch (err) {
        throw new Error(`error login: ${err}`);
    }
}