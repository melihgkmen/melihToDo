import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ToDoHomePage from './Screens/ToDoHomePage';
import ToDoDetailPage from './Screens/ToDoDetailPage';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function Router(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ToDo">
        <Stack.Screen
          name="List"
          component={ToDoHomePage}
          options={({navigation, route}) => ({
            title: 'melihToDo',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ListDetail')}
                style={{
                  marginRight: 20,
                }}>
                <Text style={{fontSize: 30}}>+</Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="ListDetail"
          component={ToDoDetailPage}
          options={{title: 'Add Todo List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
