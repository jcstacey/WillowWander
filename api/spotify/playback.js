export async function getCurrentPlayback(accessToken) {
	const response = await fetch("https://api.spotify.com/v1/me/player", {
		method: "GET",
		headers: {
			Authorization: "Bearer " + accessToken,
		},
	});
	const data = await response.json();
	return data;
}

export async function getProfile(accessToken) {
	const response = await fetch("https://api.spotify.com/v1/me", {
		headers: {
			Authorization: "Bearer " + accessToken,
		},
	});

	const data = await response.json();
	return data;
}
