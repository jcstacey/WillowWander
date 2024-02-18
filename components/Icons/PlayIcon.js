import { Svg, Path, Polygon } from "react-native-svg";

export default function PlayIcon() {
	return (
		<Svg
			height={30}
			width={30}
			viewBox="0 0 24 24"
			stroke="white"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<Polygon fill="white" points="5 3 19 12 5 21 5 3"></Polygon>
		</Svg>
	);
}
