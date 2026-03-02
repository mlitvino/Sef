import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { setBackgroundColorAsync } from 'expo-system-ui';

export default function RootLayout() {
  useEffect(() => {
    setBackgroundColorAsync('#222025')
      .catch(err => console.error('Failed to change root background color:', err));
  }, []);

  return (
    <Stack>
      <Stack.Screen name={'(drawer)'} options={{ headerShown: false }}  />
      <Stack.Screen name={'transaction-modal'} options={{ presentation: 'modal' }}  />
    </Stack>
  );
}
