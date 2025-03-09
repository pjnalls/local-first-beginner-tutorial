# TinyBase Tables and Cells

*Concepts you may want to Google beforehand: database tables, database cells*

**Goal: Define TinyBase database table and cell names.**

This is a super short lesson.

## Define Table Name

1. Navigate to the top of `/client/app/(tabs)/index.tsx`.
```typescript
// Used to contain elements in the UI
import { View } from "react-native";
// Custom light-and-dark-themed wrapper component around the React Native Text element
import { ThemedText } from "@/components/ThemedText";

// Add code here
// ...
```
2. Define a table name constant:
```typescript
// Used to contain elements in the UI
import { View } from "react-native";
// Custom light-and-dark-themed wrapper component around the React Native Text element
import { ThemedText } from "@/components/ThemedText";

// Define TinyBase database table name
const TABLE_NAME = "tasks";

// Add code here
// Add code here
// ...
```

## Define Cell Names
```typescript
// ...
// Define TinyBase database table name
const TABLE_NAME = "tasks";

// Define TinyBase database cell names  
const TEXT_CELL = "text";
const DONE_CELL = "done";
// ...
```

[Previous: TinyBase Provider](/02-tinybase-provider.md) • [Next: TinyBase Store](/04-tinybase-store.md)