import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text>12345</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flex: 4,
        }}
      >
        <View
          style={{
            backgroundColor: '#DEB887',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <View style={{ backgroundColor: '#00FFFF' }}>
            <Text>!!!!!</Text>
          </View>
          <View style={{ backgroundColor: '#FFF8DC' }}>
            <Text>?????</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button title="add" style={{ height: 100, width: 10 }} />
          </View>
          <View
            style={{
              backgroundColor: '#008B8B',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button title="delete" />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    flexDirection: 'column',
    width: '100%',
    height: 500,
    backgroundColor: 'lightblue',
    justifyContent: 'space-around',
  },
});
