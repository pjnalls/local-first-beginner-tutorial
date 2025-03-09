# TinyBase Provider
*Concepts you may want to Google beforehand: tinybase, react providers*

**Goal: Wrap the app screens with the TinyBase provider and generate helper functions**

## Import TinyBase Provider
1. Navigate to `/client/app/_layout.tsx`.
2. Add an import statement for the TinyBase Provider:
```typescript
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
// ...
```
```typescript
// ...
import 'react-native-reanimated';
// Add code here

import { useColorScheme } from '@/hooks/useColorScheme';
// ...
```
```typescript
// ...
import 'react-native-reanimated';
// Import provider to use TinyBase
import { Provider as TinyBaseProvider } from 'tinybase/ui-react';

import { useColorScheme } from '@/hooks/useColorScheme';
// ...
```

## Wrap the TinyBase Provider around the App Screens
1. Locate the `return` statement at the end of the `RootLayout` functional component:
```typescript
// ...
return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
  );
}
```
2. Wrap the TinyBase provider around the app screens:
```typescript
// ...
return (
    // Use TinyBase provider to wrap the app screens for local-first development
    <TinyBaseProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
   </TinyBaseProvider>
  );
}
```
## Option 1: Generate Helper Functions (Results May Vary)

If you're using Cursor as your IDE, you can chat with Cursor or use the following prompt to generate helper methods needed for this tutorial (*Warning: results may vary*):
```
Please create two helper functions for the HomeScreen of a to-do app written about the HomeScreen functional component:

1. one for generating a random ID

2. one for getting a random task from an array of 21 unique, generated to-do tasks with an emoji followed by the activity.
```

## Option 2: Type Helper Functions Provided in Tutorial

The following code generated above the `HomeScreen` functional component in `/client/app/(tabs)/index.tsx` based on the prompt provided in the last step, the `## Option 1"` section:
```typescript
// Above are `import` statments
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
// Below is the main `HomeScreen` component
```

[Previous: Project Setup](/01-project-setup.md) • [Next: TinyBase Tables and Cells](/03-tinybase-tables-and-cells.md)