import { redirect, type Actions } from "@sveltejs/kit";
import { createSession, getUser } from "../../lib/models/user";

export const actions:Actions = {
    login: async ({request, cookies}) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData])
        try {
            if(!data.email)
                return {
                    error:true
                }
            let email = data.email.toString()
            if(!data.password)
                return {
                    error:true,
                    email:data.email
                }
            let password = data.password.toString()
            // Se busca user por BD
            // Si es valido pues redirect a home
            // Si no pues algun error se de vuelve para el UI
            const user = await getUser(email, password)
            console.log(user)
            if(user.error)
                return {
                    error:true,
                    email:data.email.toString()
                }
            cookies.set('sessionid', await createSession(user))
        } catch (error) {
            console.log("Error:", error)
            return {
                error: true,
                email: data.email
            }
        }
        //cookies.set('sessionid', "123")
        throw redirect(303, '/')
    }
}