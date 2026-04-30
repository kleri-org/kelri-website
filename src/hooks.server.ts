import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const host = event.request.headers.get('host');

	if (host === 'www.kleri.org') {
		const url = new URL(event.request.url);
		url.host = 'kleri.org';
		return new Response(null, {
			status: 301,
			headers: { location: url.toString() }
		});
	}

	return resolve(event);
};
