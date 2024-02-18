import { View, TouchableHighlight } from "react-native";
export default function CircleButton({
	classStyle = "",
	underLayColor = "#34054a",
	onPress,
	children,
}) {
	return (
		<View className={`rounded-full ${classStyle}`}>
			<TouchableHighlight
				className="flex-1 justify-center items-center rounded-full"
				underlayColor={underLayColor}
				onPress={onPress}
			>
				{children}
			</TouchableHighlight>
		</View>
	);
}
