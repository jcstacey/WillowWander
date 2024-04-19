import { View, Text } from "react-native";

export default function Header({ title = "" }) {
	return (
		<View className="p-2 bg-indigo-950  justify-center rounded">
			<Text className="text-white text-center text-3xl">{title}</Text>
		</View>
	);
}
