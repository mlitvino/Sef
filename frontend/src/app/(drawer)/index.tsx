import { Text, View, StyleSheet } from "react-native";

import Button from "@/components/Button";

export default function Index() {
  return (
    <View style={styles.screen}>
      <View style={styles.buttonGroupContainer}>
        <Button label={'minus'} onPress={() => console.log('Button 1')} />
        <Button label={'plus'} onPress={() => console.log('Button 2')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#2f2e33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroupContainer: {
    backgroundColor: '#262236',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 150,
    padding: 20,
    borderRadius: 12,
  },
})

