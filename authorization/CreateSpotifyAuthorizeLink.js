import { generateRandomString, sha256, base64encode } from "./AuthHelper";

export async function CreateSpotifyAuthorizeLink() {
	const codeVerifier = generateRandomString(64);
	const hashed = await sha256(codeVerifier);
	const codeChallenge = base64encode(hashed);
	const clientId = "28b4ed8dc18d49af9b9d4bc6b014fe90";
	const redirectUri = "http://localhost:8081";

	const scope = "user-read-private user-read-email";
	const authUrl = new URL("https://accounts.spotify.com/authorize");

	const params = {
		response_type: "code",
		client_id: clientId,
		scope,
		code_challenge_method: "S256",
		code_challenge: codeChallenge,
		redirect_uri: redirectUri,
	};
	authUrl.search = new URLSearchParams(params).toString();
	let link = authUrl.toString();
	return link;
}
