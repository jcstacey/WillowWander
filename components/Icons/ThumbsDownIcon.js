import { Svg, Path } from "react-native-svg";

export default function ThumbsDownIcon() {
	return (
		<Svg height={30} width={30} viewBox="0 0 24 24">
			<Path
				d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
				stroke="white"
				strokeWidth={1.5}
				fill="none"
			></Path>
		</Svg>
	);
}
