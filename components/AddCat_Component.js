import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default AddCat = (props) => {
  const [catName, setCatName] = useState('');
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        width={props.style.width}
        onChangeText={(val) => {
          setCatName(val);
        }}
        defaultValue={catName}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {catName
          .split(' ')
          .map((word) => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};
