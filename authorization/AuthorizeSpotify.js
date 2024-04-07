import { useEffect } from "react";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { secureSave } from "../utils/secureStore";

export async function AuthorizeSpotify() {
	const redirectUri = makeRedirectUri({
		scheme: "willowwander",
	});
	const CLIENT_ID = "28b4ed8dc18d49af9b9d4bc6b014fe90";
	const discovery = {
		authorizationEndpoint: "https://accounts.spotify.com/authorize",
	};

	const [request, response, promptAsync] = useAuthRequest(
		{
			clientId: CLIENT_ID,
			scopes: [
				"user-read-email",
				"playlist-modify-public",
				"app-remote-control",
				"streaming",
				"user-read-playback-state",
				"user-modify-playback-state",
			],
			redirectUri: redirectUri,
		},
		discovery
	);

	const getAccessToken = () => {
		if (response?.params?.code) {
			fetch("https://accounts.spotify.com/api/token", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: `grant_type=authorization_code&code=${response?.params?.code}&redirect_uri=${redirectUri}&client_id=${CLIENT_ID}&code_verifier=${request?.codeVerifier}`,
			})
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					secureSave("spotifyToken", data.access_token);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	useEffect(() => {
		if (response?.type === "success") {
			getAccessToken();
		}
	}, [response]);

	return () => {
		promptAsync();
	};
}
