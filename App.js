import { useEffect, useState } from "react";
import {
  Button,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import Header from "./components/Header";
import CircleButton from "./components/CircleButton";
import ThumbsUpIcon from "./components/Icons/ThumbsUpIcon";
import ThumbsDownIcon from "./components/Icons/ThumbsDownIcon";
import PlayIcon from "./components/Icons/PlayIcon";
import colors from "tailwindcss/colors";
import { AuthorizeSpotify } from "./authorization/AuthorizeSpotify";
import {
  getSongRecommendation,
  nextSong,
  playPause,
  previousSong,
  resumePlayback,
  playSong,
} from "./api/spotify/playback";

export default function App() {
  const promptAsync = AuthorizeSpotify();
  const [recommendation, setRecommendation] = useState();
  return (
    <View className="flex-1 bg-slate-900 flex-col ">
      <StatusBar backgroundColor={colors.indigo[950]} />
      <Header title="Playlii" />
      <View className="flex-1  justify-center rounded mb-2">
        {recommendation &&
          recommendation?.map((song) => {
            return (
              <Button
				key={song?.id}
                onPress={() => {
                  playSong(song);
                }}
				title={`${song?.name} - ${song?.artists[0]?.name}`}
              ></Button>
            );
          })}
        <View className="mt-10">
          <Button
            className="my-10 bg-red-300"
            title="Recommend"
            onPress={async () => {
              const data = await getSongRecommendation();
              setRecommendation(data);
            }}
          ></Button>
        </View>
        <Button
          title="Login"
          onPress={() => {
            promptAsync.then((openAuthPanel) => {
              openAuthPanel();
            });
          }}
        />
      </View>
      <View className="h-32 bg-slate-900 justify-center rounded  mb-4 flex-row items-center">
        {/* Dislike */}
        <CircleButton
          classStyle="h-20 w-20 bg-red-800 m-4"
          underlayColor="#680a05"
          onPress={() => {
            previousSong();
          }}
        >
          <ThumbsDownIcon />
        </CircleButton>
        {/* Play */}
        <View className="h-20 w-28 rounded bg-blue-900">
          <TouchableHighlight
            className="flex-1 w-full justify-center items-center rounded"
            underlayColor={"#221489"}
            onPress={() => {
              playPause();
            }}
          >
            <PlayIcon />
          </TouchableHighlight>
        </View>
        {/* Like */}
        <CircleButton
          classStyle="h-20 w-20 bg-green-700 m-4"
          underlayColor="#044f09"
          onPress={() => {
            nextSong();
          }}
        >
          <ThumbsUpIcon />
        </CircleButton>
      </View>
    </View>
  );
}
