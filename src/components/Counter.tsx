import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface Props {
  name: string;
  count?: number;
  onInc?: () => void;
  onDec?: () => void;
}

export default (
  { name, count = 1, onInc = () => undefined, onDec = () => {} }: Props, // tslint:disable-line
) => (
  <View style={styles.root}>
    <Text style={{color: 'red'}}>
      Counter111hhh {name}: {count}
    </Text>
    <View>
      <Button title="+" onPress={onInc} />
      <Button title="-" onPress={onDec} />
    </View>
  </View>
);

// styles
const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  buttons: {
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
    flexDirection: 'row',
    minHeight: 70,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
});
