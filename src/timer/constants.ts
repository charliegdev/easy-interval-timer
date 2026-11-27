import { Platform } from "react-native";

export enum PlayStatus {
  Playing = "Playing",
  Paused = "Paused",
  Stopped = "Stopped",
}

export enum TimerAction {
  Toggle = "Toggle",
  Stop = "Stop",
}

// * Put the Record type to enforce all PlayStatus. Otherwise some can be missing without
// * TS error, and I can also add whatever as key by mistake.
export const statusLabel: Record<PlayStatus, string> = {
  [PlayStatus.Stopped]: "Ready",
  [PlayStatus.Playing]: "Running",
  [PlayStatus.Paused]: "Paused",
};

export const platformName = Platform.select({
  ios: "iOS",
  android: "Android",
  default: "web",
});
