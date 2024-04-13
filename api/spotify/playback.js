import { getSecureValueAsync } from "../../utils/secureStore";

export async function playPause() {
	const accessToken = await getSecureValueAsync("spotifyToken");
	const res = await getCurrentPlayback();
	if (res && res.is_playing) pausePlayback();
	else if (res) resumePlayback();
	else if (!res) console.log("No Playback");
}

export async function getCurrentPlayback() {
	const accessToken = await getSecureValueAsync("spotifyToken");
	const response = await fetch("https://api.spotify.com/v1/me/player", {
		headers: {
			Authorization: "Bearer " + accessToken,
		},
	});
	const data = await response;
	if (data.status === 204) return false; // 204 is for empty playback, meaning there is no currently playing device and there is no body
	// TODO: ADD TO A LOG for error 4xx status
	return data.json();
}

export async function getProfile() {
	const accessToken = await getSecureValueAsync("spotifyToken");
	const response = await fetch("https://api.spotify.com/v1/me", {
		headers: {
			Authorization: "Bearer " + accessToken,
		},
	});
}

export async function resumePlayback() {
	const accessToken = await getSecureValueAsync("spotifyToken");
	const response = await fetch("https://api.spotify.com/v1/me/player/play", {
		method: "PUT",
		headers: {
			Authorization: "Bearer " + accessToken,
		},
	});

	const data = await response.json();
	console.log(data);
}

export async function pausePlayback() {
	const accessToken = await getSecureValueAsync("spotifyToken");
	const response = await fetch("https://api.spotify.com/v1/me/player/pause", {
		method: "PUT",
		headers: {
			Authorization: "Bearer " + accessToken,
		},
	});

	const data = await response.json();
	console.log(data);
}
