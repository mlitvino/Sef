import { Text, View, StyleSheet } from 'react-native';

import type { TransactionType } from '@/types/Transaction';
import { useTransactions } from '@/contexts/TranscationContext';

type TotalProps = {
  type: TransactionType;
};

export default function Total({ type }: TotalProps) {
  const transactions = useTransactions();

  const total = transactions
    .filter(t => t.type === type)
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{type}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.categoryText}>all-time</Text>
        <Text style={styles.totalText}>{total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  body: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
  },
  totalText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
});
