import { verifySession } from "@/lib/session";
import { User } from "@/lib/type";
import api from "../api";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await verifySession();

    if (!session) return null;

    const { token } = session;

    try {
        const response = await fetch(`${api}/user`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (response.status === 200) {
            const data = await response.json();
            return NextResponse.json(data as User);
        } else {
            // redirect
            console.log(response.status);
        }
    } catch (err) {
        throw new Error(`error fetching user data: ${err}`);
    }
}