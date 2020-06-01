import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View style={styles.container}>
      <Text>
        i am {props.name}, very {isHungry ? 'hungry' : 'fully'}{' '}
      </Text>
      <Button
        title={isHungry ? 'some milk please' : 'thank you '}
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
      />

      <Button
        title="init"
        onPress={() => {
          setIsHungry(true);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: 'green',
  },
});
