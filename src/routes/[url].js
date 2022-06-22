export async function get({ params }) {
	if (params.url) {
		return {
			body: { url: params.url }
		};
	}
	return {
		status: 404
	};
}
