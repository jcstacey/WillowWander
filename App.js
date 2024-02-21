import { useEffect, useState } from "react";
import { Button, Text, TouchableHighlight, View } from "react-native";
import { Linking } from "expo-linking";
import Header from "./components/Header";
import CircleButton from "./components/CircleButton";
import ThumbsUpIcon from "./components/Icons/ThumbsUpIcon";
import ThumbsDownIcon from "./components/Icons/ThumbsDownIcon";
import PlayIcon from "./components/Icons/PlayIcon";
import { CreateSpotifyAuthorizeLink } from "./authorization/CreateSpotifyAuthorizeLink";
import * as WebBrowser from "expo-web-browser";
export default function App() {
	const [counter, setCounter] = useState(0);
	const [spotifyLink, setSpotifyLink] = useState("");

	useEffect(() => {
		fetchLink = async () => {
			let link = "";
			link = await CreateSpotifyAuthorizeLink();
			if (!spotifyLink && link) setSpotifyLink(link);
		};
		fetchLink();
	}, []);

	return (
		<View className="flex-1 bg-slate-900 flex-col ">
			<Header title="Willow Wander" />
			<View className="flex-1  justify-center rounded mb-2">
				<Button
					title="Login with Spotify"
					onPress={() => {
						spotifyLink &&
							WebBrowser.openBrowserAsync(spotifyLink, { showTitle: true });
					}}
				></Button>
			</View>
			<View className="h-32 bg-slate-900 justify-center rounded  mb-4 flex-row items-center">
				{/* Dislike */}
				<CircleButton
					classStyle="h-20 w-20 bg-red-800 m-4"
					underlayColor="#680a05"
					onPress={() => {
						counter > 0 && setCounter(counter - 1);
					}}
				>
					<ThumbsDownIcon />
				</CircleButton>
				{/* Play */}
				<View className="h-20 w-28 rounded bg-blue-900">
					<TouchableHighlight
						className="flex-1 w-full justify-center items-center rounded"
						underlayColor={"#221489"}
						onPress={() => {}}
					>
						<PlayIcon />
					</TouchableHighlight>
				</View>
				{/* Like */}
				<CircleButton
					classStyle="h-20 w-20 bg-green-700 m-4"
					underlayColor="#044f09"
					onPress={() => {
						setCounter(counter + 1);
					}}
				>
					<ThumbsUpIcon />
				</CircleButton>
			</View>
		</View>
	);
}
