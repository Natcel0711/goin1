import type { Handle } from "@sveltejs/kit";
import { getUserInformation } from "./lib/models/user";

export const handle = (async ({ event, resolve }) => {
    let sessionid = event.cookies.get('sessionid')
    if(!sessionid)
        return await resolve(event)
    event.locals.user = await getUserInformation(sessionid);
    const response = await resolve(event);
    response.headers.set('x-custom-header', 'potato');
    return response;
  }) satisfies Handle;