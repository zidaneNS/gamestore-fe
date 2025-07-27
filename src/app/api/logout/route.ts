import { deleteSession, verifySession } from "@/lib/session";
import { NextRequest } from "next/server";
import api from "../api";

export async function GET(req: NextRequest) {
    const session = await verifySession();
    if (!session) return null;

    const { token } = session;

    try {
        const response = await fetch(`${api}/logout`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                ...req.headers
            }
        });

       if (response.status === 204) {
            await deleteSession();
            return response;
       }
    } catch (err) {
        throw new Error(`error logout backend: ${err}`);
    }
}