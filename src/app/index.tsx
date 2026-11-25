import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="start"
        android_ripple={{
          color: "rgba(255, 255, 255, 0.3)",
          borderless: false,
        }}
        style={styles.button}
        onPress={() => console.log("Button pressed")}
      >
        <SymbolView
          name={{ ios: "play.fill", android: "play_arrow", web: "play_arrow" }}
          size={96}
          tintColor="#FFFFFF"
        />
      </Pressable>
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
  button: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    elevation: 6, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 4 },
  },
});
