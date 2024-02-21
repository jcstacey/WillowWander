import { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import Header from "./components/Header";
import CircleButton from "./components/CircleButton";
import ThumbsUpIcon from "./components/Icons/ThumbsUpIcon";
import ThumbsDownIcon from "./components/Icons/ThumbsDownIcon";
import PlayIcon from "./components/Icons/PlayIcon";
import { Authorize } from "./authorization/Authorize";
export default function App() {
	const [counter, setCounter] = useState(0);
	Authorize();
	return (
		<View className="flex-1 bg-slate-900 flex-col ">
			<Header title="Willow Wander" />
			<View className="flex-1  justify-center rounded mb-2">
				<Text className="text-white text-center text-2xl">{`Counter: ${counter}`}</Text>
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
