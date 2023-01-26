import { getAllUserTest } from '$lib/models/user';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	if (locals?.user.email === 'natcelnieves@gmail.com') {
		let users = await getAllUserTest();
		if (locals.user)
			return {
				user: locals.user,
				users: users
			};
	}
	return {
		user: locals.user
	};
}) satisfies LayoutServerLoad;
