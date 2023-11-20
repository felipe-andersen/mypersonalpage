'use server'

import { cookies } from "next/headers"

interface CookiesProtocol {
    name?: string
    email?: string
    phone?: string
    mensage?: string
}
export async function formActions_(data:CookiesProtocol) {

    cookies().set('name', `${data.name ? data.name : ""}`, { secure: true })

}

export async function formActions(data:CookiesProtocol) {
    // 'use server'

    cookies().set("name", 'FELIPE');
}