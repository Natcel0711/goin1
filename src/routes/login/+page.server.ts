import { fail, redirect, type Actions } from "@sveltejs/kit";
import { createSession, getUser } from "$lib/models/user";
import type { PageServerLoad } from "./$types";
import bcrypt from 'bcrypt'


export const load = (async ({ locals }) => {
    if(locals.user)
        throw redirect(303, "/")
}) satisfies PageServerLoad;

export const actions:Actions = {
    login: async ({request, cookies}) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData])
        try {
            let email = data.email.toString()
            let password = data.password.toString()
            // Se busca user por BD
            // Si es valido pues redirect a home
            // Si no pues algun error se de vuelve para el UI
            const user = await getUser(email)
            if(user.error)
                return fail(400, {
                    email:email
                })
            const userPassword = await bcrypt.compare(password, user.password)
            if(!userPassword)
            return fail(400, {
                email:email
            })
            cookies.set('sessionid', await createSession(user))
        } catch (error) {
            return fail(400, {
                email:''
            })
        }
        //cookies.set('sessionid', "123")
        throw redirect(303, '/')
    }
}