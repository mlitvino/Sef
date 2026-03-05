---
applyTo: '**'
---
# Copilot Instructions for Sef

## Overview

Sef is a minimalistic expense tracker built with React Native (Expo) and TypeScript, in early development stage. The app uses drawer navigation with modal overlays for adding transactions, and manages state through React Context + useReducer patterns.

## Architecture

**Monorepo Structure:**
- `/frontend/` - Expo React Native app (TypeScript strict mode)
- `/nginx/` - Reverse proxy for web deployment
- Docker Compose for containerized deployment (dev/prod configs)

**Frontend App Structure:**
```
frontend/src/app/          # Active application (Expo Router file-based routing)
├── _layout.tsx            # Root Stack navigator with AppProviders wrapper
├── transaction-modal.tsx  # Modal for adding income/expense
└── (drawer)/              # Drawer navigation group
    ├── _layout.tsx        # Drawer config (dark theme #222025)
    ├── index.tsx          # Home screen with balance display
    └── transactions.tsx   # Transaction list screen

frontend/src/contexts/     # Global state management
├── AppProviders.tsx       # Wraps TransactionProvider > BalanceProvider
├── BalanceContext.tsx     # Balance state (useReducer)
└── TranscationContext.tsx # Transaction list (useReducer with uuid)

frontend/src/components/   # Reusable UI components
frontend/app-example/      # Reference implementations (NOT active code)
```

**Path Alias:** `@/*` resolves to `frontend/src/*` (see [tsconfig.json](../../frontend/tsconfig.json))

## State Management Pattern

Use Context + useReducer for global state:

```tsx
// Pattern from TranscationContext.tsx
const [state, dispatch] = useReducer(reducer, initialState);

// Actions are discriminated unions
type Action =
  | { type: 'add'; transaction: Omit<Transaction, 'id'> }
  | { type: 'remove'; id: string };

// Separate contexts for state and dispatch
const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch<Action> | undefined>(undefined);
```

**Critical:** All contexts must be wrapped in `AppProviders` component at root layout. Order matters (inner contexts can depend on outer ones).

## Developer Workflows

**Commands** (run from project root via Makefile):
```bash
make build         # Build & start dev containers (docker-compose.dev.yml)
make start         # Start existing containers
make down          # Stop all containers
make front         # Run Expo dev server directly (no Docker)
make logs          # View all container logs
make log-frontend  # View frontend logs only
```

**Frontend-specific** (run from `frontend/`):
```bash
npm start           # Expo dev server
npm run android     # Run on Android
npm run ios         # Run on iOS
npm run web         # Run in browser
npm test            # Jest tests
npm run test:coverage
```

**Testing:** Uses `jest-expo` preset. Component tests in `__tests__/` directories with snapshot support.

## Coding Conventions

**TypeScript:**
- Strict mode enabled
- Use `type` for props, not `interface` (example: `type Props = { label: string }`)
- Export types alongside components
- Leverage Expo Router's typed routes

**Component Patterns:**
```tsx
// Standard pattern from Button.tsx/TransactionForm.tsx
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
};

export default function Button({ label, onPress }: Props) {
  return <Pressable style={styles.button}>...</Pressable>;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#413d46', // Dark theme colors
  },
});
```

**Dark Theme Colors** (hardcoded throughout):
- Background: `#2f2e33` (screens), `#222025` (drawer)
- Surface: `#262236`, `#3a3257`
- Header: `#413d46`
- Text: `#fff`

**Navigation:**
- Use `router.push('/transaction-modal?type=income')` for navigation
- Modal screens use `presentation: 'modal'` in Stack.Screen options
- Drawer titles are lowercase (e.g., 'overview')

## Data Types

```tsx
// From src/types/Transaction.tsx
type TransactionType = 'income' | 'expense';

type Transaction = {
  id: string;        // UUID (react-native-uuid)
  type: TransactionType;
  amount: number;
  // Description and createdAt commented out (future work)
};
```

## Deployment

**Docker Multi-Stage:**
- Base: `docker-compose.yml`
- Dev overlay: `docker-compose.dev.yml` (hot reload via volume mounts)
- Prod overlay: `docker-compose.prod.yml`

**Nginx** proxies to frontend on port 8080 (dev) with healthcheck polling `${FRONTEND_URL}`.

## Important Notes

- `frontend/app-example/` contains REFERENCE CODE ONLY (expo-init, expo-tutorial patterns). Active app is in `frontend/src/app/`.
- No themed components yet (examples show `ThemedText`/`ThemedView` patterns for future light/dark mode support).
- Balance/Transaction contexts use separate state/dispatch contexts for optimization.
- Jest config includes `transformIgnorePatterns` for expo/react-native modules and `react-native-uuid`.
- Root background color set via `expo-system-ui` in [_layout.tsx](../../frontend/src/app/_layout.tsx).

## Roadmap Context

Planned features (see [README.md](../../README.md)):
- Backend (Golang REST API)
- Open Banking API integration
- Multi-account support
- Theme toggle (currently dark-only)
- Categories/tags, budget tracking, export reports, cloud sync
