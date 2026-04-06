import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { useCurrency } from '@/contexts/SettingsContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function SettingsIndex() {
  const router = useRouter();
  const theme = useTheme();
  const currency = useCurrency();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.section, { borderColor: theme.separator }]}>
        <Pressable
          style={({ pressed }) => [
            styles.row,
            pressed && styles.pressed,
          ]}
          onPress={() => router.push('/(drawer)/(settings)/currency')}
        >
          <Text style={[styles.rowLabel, { color: theme.text }]}>{t('settings.currency')}</Text>
          <Text style={[styles.rowValue, { color: theme.text }]}>{currency}</Text>
        </Pressable>
      </View>

      <View style={[styles.section, { borderColor: theme.separator }]}> 
        <Pressable
          style={({ pressed }) => [
            styles.row,
            pressed && styles.pressed,
          ]}
          onPress={() => router.push('/(drawer)/(settings)/appearance')}
        >
          <Text style={[styles.rowLabel, { color: theme.text }]}>{t('settings.appearance')}</Text>
        </Pressable>
      </View>

      <View style={[styles.section, { borderColor: theme.separator }]}>
        <Pressable
          style={({ pressed }) => [
            styles.row,
            pressed && styles.pressed,
          ]}
          onPress={() => router.push('/(drawer)/(settings)/language')}
        >
          <Text style={[styles.rowLabel, { color: theme.text }]}>{t('settings.language')}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  sectionNotFirst: {
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 16,
  },
  pressed: {
    opacity: 0.6,
  },
  rowLabel: {
    fontSize: 16,
  },
  rowValue: {
    fontSize: 14,
    opacity: 0.8,
  },
  chevron: {
    fontSize: 22,
  },
});
