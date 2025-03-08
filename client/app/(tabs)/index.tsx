/* Used to contain elements in the UI */
import { View } from "react-native";

/* Custom light-and-dark-themed wrapper component around the React Native Text element */
import { ThemedText } from "@/components/ThemedText";

/* The main component for the Home screen */
export default function HomeScreen() {
  /* The main UI for the Home screen */
  return (
    /* The main container for the UI */
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* The main title for the screen */}
      <ThemedText type="title">Tasks</ThemedText>
    </View>
  )
}