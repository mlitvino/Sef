import { Text, View, StyleSheet } from 'react-native';

import { router } from 'expo-router';

import { useBalance } from '@/contexts/BalanceContext';
import Button from '@/components/Button';
import Total from '@/components/Total';

export default function Index() {
  const balance = useBalance();

  const addIncome = () => {
    router.push('/transaction-modal?type=income');
  };

  const addExpense = () => {
    router.push('/transaction-modal?type=expense');
  };

  return (
    <View style={styles.screen}>

      <View style={styles.totalsBox}>
        <Total type={'income'} />
        <View style={styles.verticalSeparator} />
        <Total type={'expense'} />
      </View>

      <View style={styles.content}>
        <View style={styles.buttonGroupContainer}>
          <Button label={'plus'} onPress={addIncome} />

          <View style={styles.balanceGroupContainer} >
            <Text style={styles.balanceTitle}>Balance:</Text>
            <Text style={styles.balance}>{balance}</Text>
          </View>

          <Button label={'minus'} onPress={addExpense} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#2f2e33',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  totalsBox: {
    backgroundColor: '#262236',
    width: 360,
    borderRadius: 12,
    overflow: 'hidden',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 60,
    justifyContent: 'flex-start',
    zIndex: 100,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  verticalSeparator: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  buttonGroupContainer: {
    backgroundColor: '#262236',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 360,
    height: 150,
    padding: 20,
    borderRadius: 12,
    gap: 10,
  },
  balanceGroupContainer: {
    backgroundColor: '#3a3257',
    width: 100,
    height: 100,
    alignItems: 'center',
    padding: 15,
  },
  balanceTitle: {
    color: '#fff',
    fontSize: 16,
  },
  balance: {
    color: '#fff',
    fontSize: 40,
  },
});

