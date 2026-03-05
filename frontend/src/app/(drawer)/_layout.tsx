import { StyleSheet } from 'react-native';
import { Drawer } from 'expo-router/drawer';

import { useTheme } from '@/hooks/use-theme-color';

export default function Layout() {
  const theme = useTheme();

  return (
    <Drawer
      screenOptions={{
        drawerStyle: [styles.container, { backgroundColor: theme.canvas }],
        drawerLabelStyle: { color: theme.text },
        headerStyle: { backgroundColor: theme.elevated },
        headerTitleStyle: { color: theme.text },
      }}
    >
      <Drawer.Screen
        name={'index'}
        options={{
          title: 'overview',
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name={'transactions'}
        options={{
          title: 'Transactions',
          drawerLabel: 'Transactions',
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
  },
});
