import { View, Text } from "react-native";

export default function Header({ title = "" }) {
	return (
		<View className="h-20 bg-indigo-950  justify-center rounded pt-4">
			<Text className="text-white text-center text-3xl">{title}</Text>
		</View>
	);
}
