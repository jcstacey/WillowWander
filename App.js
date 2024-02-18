import { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import Header from "./components/Header";
import ThumbsUp from "./components/Icons/ThumbsUp";
import ThumbsDown from "./components/Icons/ThumbsDown";
import Play from "./components/Icons/Play";
export default function App() {
	const [counter, setCounter] = useState(0);

	return (
		<View className="flex-1 bg-slate-900 flex-col ">
			<Header title="Willow Wander" />
			<View className="flex-1  justify-center rounded mb-2">
				<Text className="text-white text-center text-2xl">{`Counter: ${counter}`}</Text>
			</View>
			<View className="h-32 bg-slate-900 justify-center rounded  mb-4 flex-row gap-4 items-center">
				<View className="h-20 w-20 rounded-full bg-red-800">
					<TouchableHighlight
						className="flex-1 justify-center items-center rounded-full"
						underlayColor={"#34054a"}
						onPress={() => {
							counter > 0 && setCounter(counter - 1);
						}}
					>
						<ThumbsDown />
					</TouchableHighlight>
				</View>
				<View className="h-20 w-20 rounded bg-blue-900">
					<TouchableHighlight
						className="flex-1 w-20 justify-center items-center rounded"
						underlayColor={"#34054a"}
						onPress={() => {}}
					>
						<Play />
					</TouchableHighlight>
				</View>
				<View className="h-20 w-20 rounded-full bg-green-700 ">
					<TouchableHighlight
						className="flex-1 justify-center items-center rounded-full"
						underlayColor={"#34054a"}
						onPress={() => {
							setCounter(counter + 1);
						}}
					>
						<ThumbsUp />
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);
}
