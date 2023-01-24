import { createSession, getUser, RegisterUser, type User } from "$lib/models/user";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import bcrypt from 'bcrypt'

export const load = (async ({ locals }) => {
    if(locals.user)
        throw redirect(303, "/")
}) satisfies PageServerLoad;

export const actions:Actions = {
    register: async ({request, cookies}) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData])
        let user:User = {
            name: `${data.firstname} ${data.lastname}`,
            email: `${data.email}`,
            password: await bcrypt.hash(data.password.toString(), 10),
            username: `${data.username}`
        }
        let existingUser = await getUser(user.email)
        if(existingUser.id)
            return {
                error: "User exists",
                email:user.email
            }
        let response = await RegisterUser(user)
        if(!response)
            return {
                error:true,
                email:data.email
            }
        throw redirect(303, "/login")
    }
}