import { Stack } from 'expo-router';
import { setBackgroundColorAsync } from 'expo-system-ui';

setBackgroundColorAsync('#222025')
  .catch(err => console.error('Failed to change root background color:', err));

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name={'(drawer)'} options={{ headerShown: false }}  />
    </Stack>
  );
}
