---
applyTo: '**'
---
# Copilot Instructions for Sef

## Project Structure

This is an Expo-based React Native app in early development. Key locations:
- **Active app**: `frontend/src/app/` - uses Expo Router with drawer navigation
- **Components**: `frontend/src/components/` - shared UI components
- **Assets**: `frontend/src/assets/images/` - icons, splash screens
- **Examples**: `frontend/app-example/` - reference implementations (tabs vs drawer patterns)
- **Path alias**: `@/*` → `frontend/src/*` (configured in tsconfig.json)

## Current Navigation Architecture

**Drawer Navigation** (single-screen setup):
```
frontend/src/app/
├── _layout.tsx          # Root Stack navigator wrapping drawer
└── (drawer)/
    ├── _layout.tsx      # Drawer configuration with dark theme (#222025 background)
    └── index.tsx        # Home screen
```

## Development Workflow

**Commands** (run from `frontend/`):
```bash
npm install          # Install dependencies
npm start            # Start Expo dev server
npm run android      # Launch Android
npm run ios          # Launch iOS
npm run web          # Launch web
npm run lint         # Run ESLint
```

**Key Configuration**:
- [app.json](../../frontend/app.json): Entry point is `expo-router/entry`, experiments enabled: `typedRoutes`, `reactCompiler`, `newArchEnabled`
- [tsconfig.json](../../frontend/tsconfig.json): Strict mode, path aliases
- Assets use `frontend/src/assets/` (not root `assets/`)

## Component Patterns

**Current Implementation Style**:
- Standard React Native components (View, Text, Pressable)
- Dark theme hardcoded in StyleSheet (#2f2e33, #262236, #413d46)
- Simple functional components with inline event handlers
- Type definitions with `type Props = { ... }`

Example from [Button.tsx](../../frontend/src/components/Button.tsx):
```tsx
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = { label: string; }

export default function Button({ label }: Props) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}
```

**Reference Patterns** (see `app-example/expo-init/`):
- `ThemedText` / `ThemedView` components for light/dark mode
- `useThemeColor()` hook for accessing theme colors
- `IconSymbol` for cross-platform icons (SF Symbols on iOS, Material on Android)
- `constants/theme.ts` for centralized colors/fonts

*Note: These themed components are not yet implemented in the active app.*

## TypeScript Conventions

- Strict mode enabled
- Export types alongside components
- Use `type` for props (not `interface`)
- Leverage typed routes from Expo Router

## Platform-Specific Code

```tsx
import { Platform } from 'react-native';

Platform.select({ ios: 'cmd + d', android: 'cmd + m', web: 'F12' })
if (process.env.EXPO_OS === 'ios') { /* iOS-only */ }
```

## Dependencies

**Navigation**: `expo-router`, `@react-navigation/drawer`, `@react-navigation/native`
**Images**: `expo-image` (not React Native's Image)
**Animations**: `react-native-reanimated`, `react-native-gesture-handler`
**Icons**: `@expo/vector-icons`, `expo-symbols`
**React**: v19.1.0 with experimental compiler

## Next Steps Context

The app structure suggests future additions:
- Implement themed components from examples for light/dark mode support
- Add more drawer screens
- Create reusable UI primitives in `components/ui/`
- Set up hooks directory for shared logic
- Define theme constants for current dark color scheme
