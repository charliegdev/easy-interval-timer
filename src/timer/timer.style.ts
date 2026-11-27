import { StyleSheet } from "react-native";

const SIZE = 200;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#757575", // * Material Grey 600,
    marginBottom: 24,
  },
  playButtonShadow: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)", // iOS + Android
  },
  stopButtonShadow: {
    width: SIZE / 2,
    height: SIZE / 2,
    borderRadius: SIZE / 4,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)", // iOS + Android
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  buttonPressed: {
    transform: [{ scale: 0.97 }],
  },
  playPauseButton: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
  },
  stopButton: {
    width: SIZE / 2,
    height: SIZE / 2,
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
