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
import {LOADING_START, LOADING_END, UPDATE_LIST} from '../actions/types';
import {updateList} from '../actions';

const ToDoUpdatePage = (props) => {
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
          backgroundColor: 'grey',
          paddingBottom: 20,
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
          multiline
          style={{
            height: 100,
          }}
        />

        <Button
          text={'Update'}
          style={{height: 40}}
          onPress={() => {
            let obj = {
              title,
              dsc,
            };
            props.updateList(obj);
            props.navigation.pop();
          }}
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = ({listResponse}) => {
  const {list, loading} = listResponse;
  return {list, loading};
};

export default connect(mapStateToProps, {updateList})(ToDoUpdatePage);
