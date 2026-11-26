import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

enum PlayStatus {
  Playing = "Playing",
  Paused = "Paused",
  Stopped = "Stopped",
}

const platformName = Platform.select({
  ios: "iOS",
  android: "Android",
  default: "web",
});

export default function HomeScreen() {
  const [playStatus, setPlayStatus] = useState(PlayStatus.Stopped);

  const isPlaying = playStatus === PlayStatus.Playing;

  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Start"
          android_ripple={{
            color: "rgba(255, 255, 255, 0.3)",
            borderless: false,
          }}
          style={({ pressed }) => [
            styles.button,
            isPlaying ? styles.playButton : styles.pauseButton,
            pressed && styles.buttonPressed,
            pressed &&
              (isPlaying
                ? styles.playButtonPressed
                : styles.pauseButtonPressed),
          ]}
          onPress={() =>
            setPlayStatus((prevState) => {
              console.log(`${prevState} on ${platformName}`);
              switch (prevState) {
                case PlayStatus.Paused:
                case PlayStatus.Stopped:
                  return PlayStatus.Playing;

                case PlayStatus.Playing:
                  return PlayStatus.Paused;

                default: {
                  const _unhandledState: never = prevState;
                  throw new Error(
                    `Unexpected playing status: ${_unhandledState}`,
                  );
                }
              }
            })
          }
        >
          <SymbolView
            name={
              isPlaying
                ? {
                    ios: "pause.fill",
                    android: "pause",
                    web: "pause",
                  }
                : {
                    ios: "play.fill",
                    android: "play_arrow",
                    web: "play_arrow",
                  }
            }
            size={96}
            tintColor="#FFFFFF"
          />
        </Pressable>
      </View>
      <Text>{playStatus}</Text>
    </View>
  );
}

const SIZE = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)", // iOS + Android
  },
  button: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  buttonPressed: {
    transform: [{ scale: 0.97 }],
  },
  playButton: {
    backgroundColor: "#FFA000", // Material Amber 700
  },
  pauseButton: {
    backgroundColor: "#4CAF50",
  },
  playButtonPressed: {
    backgroundColor: "#FF8F00", // Amber 800
  },
  pauseButtonPressed: {
    backgroundColor: "#388E3C", // Green 700
  },
});
