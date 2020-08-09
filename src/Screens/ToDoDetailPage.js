import React, {useState} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import {Input, Button} from '../Components';

const ToDoDetailPage = (props) => {
  const [title, setTitle] = useState();
  const [dsc, setDsc] = useState();

  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 20,
          flex: 1,
        }}>
        <Input
          placeholder="Title"
          value={title}
          onChangeText={(value) => setTitle(value)}
        />

        <Input
          placeholder="Description"
          value={dsc}
          onChangeText={(value) => setDsc(value)}
        />

        <Button
          text={'Add'}
          style={{height: 40}}
          onPress={() => {
            let obj = {
              title,
              dsc,
            };
           

            props.navigation.navigate('ToDoHomePage', {obj});
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ToDoDetailPage;
