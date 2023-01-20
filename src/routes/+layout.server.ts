
import { redirect, type Actions } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
 
export const load = (async ({locals}) => {
    if(locals.user)
        return {
            user: locals.user
        }
}) satisfies LayoutServerLoad;
