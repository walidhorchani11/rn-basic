import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

// import Cat from './components/Cat_Component';
// import Add from './components/AddCat_Component';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoal,
    ]);
    console.log(courseGoals);
  };

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <View style={styles.screen}>
      {/** le TextInput sera caché en haut, on peut ajouter padding -- voir layout props*/}
      {/** en CSS on utilise  border-color , not supported in react native , on a borderColor */}
      {/** cet view qui entoure le textInput et le button nous permet de les organiser */}
      <View style={styles.partView}>
        <TextInput
          placeholder="course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="add" onPress={addGoalHandler} />
      </View>
      <View>
        <Text>List of Goals</Text>
      </View>
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

const styles = StyleSheet.create({
  screen: { padding: 30, backgroundColor: 'yellow', height: 300 },
  partView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'green',
    height: 200,
    padding: 10,
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    width: '70%',
  },
});
