import { NextRequest } from "next/server";
import api from "../api";
import { createSession } from "@/lib/session";

export async function POST(req: NextRequest) {
    const body = await req.json();
    
    try {
        const response = await fetch(`${api}/login`, {
            method: req.method,
            headers: req.headers,
            body: JSON.stringify(body)
        });

        if (response.status === 200) {
            const result = await response.json();
            const token = result.token;
            await createSession(token);

            const getUser = await fetch(`${api}/user`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    ...req.headers
                }
            });

            if (getUser.status === 200) {
                return getUser;
            } else {
                // redirect
                console.log(getUser.status);
            }
        }
    } catch (err) {
        throw new Error(`error login: ${err}`);
    }
}