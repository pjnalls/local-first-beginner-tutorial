// Used to contain elements in the UI
import { Button, View } from "react-native";
// Custom light-and-dark-themed wrapper component around the React Native Text element
import { ThemedText } from "@/components/ThemedText";
import { useCreateMergeableStore, useProvideStore } from "tinybase/ui-react";
import { createMergeableStore } from "tinybase/mergeable-store";

// Define TinyBase database table name
const TABLE_NAME = "tasks";

// Define TinyBase database cell names  
const TEXT_CELL = "text";
const DONE_CELL = "done";

/**
 * Generates a random ID string using timestamp and random numbers
 * @returns A unique string ID
 */
const generateRandomId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

// Array of predefined tasks with emojis
const SAMPLE_TASKS: string[] = [
  "📚 Read a chapter of a book",
  "🏃‍♂️ Go for a 30-minute run",
  "🧘‍♀️ Practice meditation",
  "💻 Learn a new programming concept",
  "🎨 Draw or paint something",
  "🎵 Practice musical instrument",
  "🧹 Clean and organize workspace",
  "🌱 Water the plants",
  "📝 Write in journal",
  "🥗 Prepare a healthy meal",
  "📞 Call a family member",
  "💪 Do a workout session",
  "🛒 Go grocery shopping",
  "✉️ Clear email inbox",
  "🚶‍♂️ Take a walk outside",
  "📸 Practice photography",
  "🧺 Do laundry",
  "🎮 Take a coding break",
  "🔧 Fix something around house",
  "📱 Update apps and software",
  "🌙 Plan tomorrow's schedule"
];

/**
 * Gets a random task from the predefined list
 * @returns A random task string with emoji
 */
const getRandomTask = (): string => {
  const randomIndex = Math.floor(Math.random() * SAMPLE_TASKS.length);
  return SAMPLE_TASKS[randomIndex];
};

/**
 * The `AddTask` button component
 * @returns A React Native component
 */
const AddTask = () => <Button title="Add Task" onPress={() => { }} />;

/**
 * The main component for the Home screen
 * @returns A React Native component
 */
export default function HomeScreen() {
  // Create a mergeable store
  const store = useCreateMergeableStore(() => createMergeableStore());
  // Provide the store to the table
  useProvideStore(TABLE_NAME, store);
  // The main UI for the Home screen
  return (
    // The main container for the UI
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* The main title for the screen */}
      <ThemedText type="title">Tasks</ThemedText>
      <AddTask />
    </View>
  )
}

