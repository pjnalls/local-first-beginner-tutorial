# local-first-dev-tutorial
A React Native development beginner tutorial for building a local-first to-do app for iOS, Android, and the Web, based on the tutorial Expo provides here: https://www.youtube.com/watch?v=eNviiODBWFE.

While local-first software may not fit every use case and there are certainly some disadvantages to using it, I'm excited about the potential data privacy and security it can give back to users. I'm a fan of Tim Berners-Lee, the inventor of the World Wide Web, who is a vocal advocate for user control of their personal data.

Inspired by Tim Berners-Lee's user-centered ideas of personal data, I'll try to make short step-by-step READMEs and code samples for anyone to follow that show how to develop a local-first React Native to-do app for iOS and Android.

You can read about local-first architecture with Expo here: https://docs.expo.dev/guides/local-first/

## Features
- This course is a code tutorial aimed at people who are comfortable with React Native development. For example, developers who have a curiosity about how to create cross-platform apps for iOS, Android, and the local Web but don't necessarily need to have a lot of experience creating React Native apps.
- There are bits of explanations, but I'd like to simply provide instructions, code snippets, and screenshots of our progress throughout the tutorial.
- The lessons are tiny and may take 5-15 minutes to complete. You got this!

## How to use this tutorial
1. Start with the first folder and go down in order. The lessons build on previous code, so if you jump right to folder 06 and don't know where the `store` came from to be used by the `useCreatePersister` hook, it's because you missed lesson 02. Really, just go in the right order.
2. Open the README and read the first line, which details the concepts you should be familiar with before reading the code. Google concepts you are not familiar with. The second line states the goals for each lesson. Read them, because they explain why we do what we do. The "why" is as important as the "how".
3. Read the rest of the README. It is **_very concise_**.
4. Try to write the code files by yourself after reading the README.
5. Look at the code examples. They are extremely well commented.
6. Experiment with them and try to break things. The only way to make sure you understood something is by trying to break it or replicate it with different code.

TL;DR: First read the README in each folder, then the code files.

## Strategy
We'll implement CRUD operations, a local database, and a synchronization feature for our local-first to-do app through these steps:
- Create a client Expo app - **DONE!**
- Install dependencies - **DONE!**
- Add TinyBase provider - **DONE!**
- Define TinyBase database tables and cells
- Create a mergeable store
- Add items to the store
- Start TinyBase persister
- Display tasks
- Implement sync server
- Create a server project
- Install TinyBase on the server
- Start TinyBase synchronizer
- Create a self-signed certificate for local server
- Test synchronization on local server

We will go through all of these strategic steps in order.

## Credits
1. Big thanks to [Expo](https://expo.dev/) for getting me curious about local-first development and for sharing the beginner tutorial for it available here: https://www.youtube.com/watch?v=eNviiODBWFE.
2. Credit to [@cfenollossa](https://github.com/cfenollosa) for their well-written [os-tutorial](https://github.com/cfenollosa/os-tutorial) which helped me write this tutorial.