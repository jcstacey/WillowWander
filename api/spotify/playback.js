import { getSecureValue } from "../../utils/secureStore";

const accessToken = getSecureValue("spotifyToken");
console.log(accessToken);

export async function getCurrentPlayback() {
	const response = await fetch("https://api.spotify.com/v1/me/player", {
		method: "GET",
		headers: {
			Authorization: "Bearer " + accessToken,
		},
	});
	const data = await response.json();
	return data;
}

export async function getProfile() {
	const response = await fetch("https://api.spotify.com/v1/me", {
		headers: {
			Authorization: "Bearer " + accessToken,
		},
	});

	const data = await response.json();
	return data;
}

export async function resumePlayback() {
	const response = await fetch("https://api.spotify.com/v1/me/player/play", {
		method: "PUT",
		headers: {
			Authorization: "Bearer " + accessToken,
		},
	});

	const data = await response.json();
	console.log(data);
}
