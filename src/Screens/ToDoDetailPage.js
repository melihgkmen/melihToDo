import React, {useState} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {Input, Button} from '../Components';
import {UPDATE_LIST} from '../actions/types';

const ToDoDetailPage = (props) => {
  const dispatch = useDispatch();

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
            dispatch({type: UPDATE_LIST, payload: obj});
            props.navigation.pop();
          }}
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = ({listResponse}) => {
  const {list} = listResponse;
  return {list};
};

export default connect(mapStateToProps, {})(ToDoDetailPage);
