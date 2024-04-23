import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Pressable from "./Pressable";

export default function GradientButton({
  colors = [],
  classStyle = "",
  onPress,
  textTop,
  textBottom,
}) {
  return (
    <Pressable classStyle="flex-1 m-1 h-20 rounded" onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={colors}
        className="flex-1 h-20 rounded items-center justify-center"
      >
        {textTop && (
          <Text className="h-min font-bold text-white">{textTop}</Text>
        )}
        {textBottom && <Text className="h-min  text-white">{textBottom}</Text>}
      </LinearGradient>
    </Pressable>
  );
}
