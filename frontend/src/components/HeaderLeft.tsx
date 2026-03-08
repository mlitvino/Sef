import React from 'react';
import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { useTheme } from '@/contexts/ThemeContext';

type HeaderLeftProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void
};

export default function HeaderLeft({ icon, onPress }: HeaderLeftProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={{ marginLeft: 14 }}
    >
      <MaterialIcons name={icon} size={26} color={theme.text} />
    </Pressable>
  );
}
