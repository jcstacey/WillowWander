import { generateRandomString, sha256, base64encode } from "./AuthHelper";
import { Linking } from "react-native";

export async function Authorize() {
	const codeVerifier = generateRandomString(64);
	const hashed = await sha256(codeVerifier);
	const codeChallenge = base64encode(hashed);
	console.log(codeChallenge);
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
	let url = authUrl.toString();
	let supported = await Linking.canOpenURL(url);

	if (supported) {
		// Opening the link with some app, if the URL scheme is "http" the web link should be opened
		// by some browser in the mobile
		await Linking.openURL(url);
	} else {
		Alert.alert(`Don't know how to open this URL: ${url}`);
	}
}
