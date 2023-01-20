import { createSession, RegisterUser, type User } from "$lib/models/user";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

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
            password: `${data.password}`,
            username: `${data.username}`
        }
        let response = await RegisterUser(user)
        if(!response)
            return {
                error:true,
                email:data.email
            }
        cookies.set('sessionid', await createSession(user))
        throw redirect(303, "/")
    }
}