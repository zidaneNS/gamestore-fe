import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { SessionPayload } from './type'
import { cookies } from 'next/headers'
import { cache } from 'react'
import { redirect } from 'next/navigation'
 
const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)
 
export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1d')
    .sign(encodedKey)
}
 
export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}

export async function createSession(token: string) {
    const expiresAt = new Date(Date.now() + 24 * 3600 * 1000);
    const session = await encrypt({ token, expiresAt });
    const cookieStore = await cookies();

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/'
    });
}

// export async function updateSession() {
//     const session = (await cookies()).get('session')?.value;
//     const payload = await decrypt(session);

//     if (!session || !payload) {
//         return null;
//     }

//     const expires = new Date(Date.now() + 24 * 3600 * 1000);

//     const cookieStore = await cookies();

//     cookieStore.set('session', session, {
//         httpOnly: true,
//         secure: true,
//         expires,
//         sameSite: 'lax',
//         path: '/'
//     });
// }

export async function deleteSession() {
    const cookieStore = await cookies();

    cookieStore.delete('session');
}

export const verifySession = cache(async () => {
    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);

    if (!session?.token) {
        redirect('/login');
    }

    return { token: session.token as string }
});