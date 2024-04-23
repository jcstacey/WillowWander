import { TouchableHighlight, View } from "react-native";

export default function Pressable({
  classStyle = "",
  underlayColor = "#fff",
  onPress,
  children,
}) {
  return (
    <View className={classStyle}>
      <TouchableHighlight
        className="flex-1"
        underlayColor={underlayColor}
        onPress={onPress}
      >
        {children}
      </TouchableHighlight>
    </View>
  );
}
