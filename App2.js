import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  ScrollView,
  Image,
  TextInput,
  Button,
} from 'react-native';

import Cat from './components/Cat_Component';
import Add from './components/AddCat_Component';

export default function App() {
  const [selectedValue, seSelectedValue] = useState('pipi');
  return (
    <View style={{ padding: 30, backgroundColor: 'yellow', height: 300 }}>
      {/** le TextInput sera caché en haut, on peut ajouter padding -- voir layout props*/}
      {/** on CSS on utilise  border-color , not supported in react native , on a borderColor */}
      {/** cet view qui entoure le textInput et le button nous permet de les organiser */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: 'green',
          height: 200,
          padding: 10,
        }}
      >
        <TextInput
          placeholder="enter your task"
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            padding: 5,
            width: '70%',
          }}
        />
        <Button title="add" />
      </View>
      <View></View>
      {/*  
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200, borderTopRightRadius: 20 }}
      />

      <View style={{ backgroundColor: 'red' }}>
        <Cat name="Mimi" />
        <Cat name="Garaa" />
      </View>
      <Add style={{ width: '100%' }} placeholder="helllo" /> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 40,
//     flex: 1,
//     //backgroundColor: 'yellow',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
