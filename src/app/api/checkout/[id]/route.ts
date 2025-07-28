import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/session";
import api from "../../api";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    const session = await verifySession();

    if (!session) return NextResponse.json({ message: 'unauthorized' }, { status: 403 });

    const { token } = session;

    try {
        const response = await fetch(`${api}/checkout/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                ...req.headers
            }
        });
        console.log('berhasil dpt response checkout');

        return response;
    } catch (err) {
        throw new Error(`error retrieving snap token ${err}`);
    }
}