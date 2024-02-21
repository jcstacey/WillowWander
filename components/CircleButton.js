import { View, TouchableHighlight } from "react-native";
export default function CircleButton({
	classStyle = "",
	underlayColor = "#000",
	onPress,
	children,
}) {
	return (
		<View className={`rounded-full ${classStyle}`}>
			<TouchableHighlight
				className="flex-1 justify-center items-center rounded-full"
				underlayColor={underlayColor}
				onPress={onPress}
			>
				{children}
			</TouchableHighlight>
		</View>
	);
}
