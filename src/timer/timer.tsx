import { SymbolView } from "expo-symbols";
import { useReducer } from "react";
import { Pressable, Text, View } from "react-native";
import {
  platformName,
  PlayStatus,
  statusLabel,
  TimerAction,
} from "./constants";
import { timerStateReducer } from "./timer.reducer";
import { styles } from "./timer.style";

export function Timer() {
  const [timerState, dispatch] = useReducer(
    timerStateReducer,
    PlayStatus.Stopped,
  );

  const isPlaying = timerState === PlayStatus.Playing;

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{statusLabel[timerState]}</Text>
      <View style={styles.playButtonShadow}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={isPlaying ? "Pause" : "Start"}
          android_ripple={{
            color: "rgba(255, 255, 255, 0.3)",
            borderless: false,
          }}
          style={({ pressed }) => [
            styles.button,
            styles.playPauseButton,
            isPlaying ? styles.playButton : styles.pauseButton,
            pressed && styles.buttonPressed,
            pressed &&
              (isPlaying
                ? styles.playButtonPressed
                : styles.pauseButtonPressed),
          ]}
          onPress={() => {
            console.log(`About to: ${TimerAction.Toggle} on ${platformName}`);
            dispatch({ type: TimerAction.Toggle });
          }}
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
      <View style={styles.stopButtonShadow}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Stop"
          android_ripple={{
            color: "rgba(255, 255, 255, 0.3)",
            borderless: false,
          }}
          disabled={timerState !== PlayStatus.Paused}
          style={({ pressed }) => [
            styles.button,
            isPlaying ? styles.playButton : styles.pauseButton,
            pressed && styles.buttonPressed,
            pressed &&
              (isPlaying
                ? styles.playButtonPressed
                : styles.pauseButtonPressed),
          ]}
          onPress={() => {
            console.log(`About to: ${TimerAction.Stop} on ${platformName}`);
            dispatch({ type: TimerAction.Stop });
          }}
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
    </View>
  );
}
