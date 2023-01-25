import { createSession, getUser, RegisterUser, type User } from "$lib/models/user";
import { fail, redirect, type Actions } from "@sveltejs/kit";
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
            return fail(400, {
                error: "this email is already in use! 😬",
                FirstName: user.name.split(' ')[0],
                LastName: user.name.split(' ')[1]
            })
        let response = await RegisterUser(user)
        if(!response)
            return fail(400, {
                error:"something happened",
                FirstName: user.name.split(' ')[0],
                LastName: user.name.split(' ')[1]
            })
        throw redirect(303, "/login")
    }
}