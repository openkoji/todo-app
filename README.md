# Todo App

A simple and elegant todo list application built with React Native and Expo.

## Features

- ✅ Add tasks with priority levels (Low, Medium, High)
- ✅ Mark tasks as complete
- ✅ Delete tasks
- ✅ Filter tasks by priority
- ✅ Search functionality
- ✅ Statistics (Active, Completed, Total)

## Tech Stack

- **Framework:** React Native + Expo
- **Language:** TypeScript
- **Build System:** EAS (Expo Application Services)
- **Testing:** Jest

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests in CI mode
npm run test:ci
```

## Building for Production

### iOS

```bash
# Build for iOS
eas build --platform ios

# Submit to App Store
eas submit --platform ios
```

### Android

```bash
# Build for Android
eas build --platform android

# Submit to Play Store
eas submit --platform android
```

## Project Structure

```
todo-app/
├── src/
│   ├── screens/           # Screen components
│   ├── components/        # Reusable components
│   ├── navigation/       # Navigation setup
│   ├── services/          # API and business logic
│   ├── hooks/             # Custom hooks
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript definitions
│   └── assets/            # Images, fonts, etc.
├── __tests__/             # Unit tests
├── e2e/                   # End-to-end tests
├── App.tsx               # Main app component
├── package.json
├── tsconfig.json
├── app.json
└── eas.json
```

## Claude-Flow Development

This project follows the Claude-Flow mobile development guidelines:

- **Parallel Execution:** iOS and Android developed simultaneously
- **BatchTool Pattern:** Create related files in parallel
- **Testing Pyramid:** Unit → Integration → E2E tests
- **Swarm Orchestration:** Multiple AI agents coordinate development

Learn more: [CLAUDE-MD-Mobile-Development](https://github.com/ruvnet/claude-flow/wiki/CLAUDE-MD-Mobile-Development)

## License

MIT
