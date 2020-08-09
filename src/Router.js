import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ToDoHomePage from './Screens/ToDoHomePage';
import ToDoDetailPage from './Screens/ToDoDetailPage';
import ToDoUpdatePage from './Screens/ToDoUpdatePage';
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
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ToDoUpdatePage')}
                style={{
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 30}}>*</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ToDoDetailPage')}
                style={{
                  marginRight: 20,
                }}>
                <Text style={{fontSize: 30}}>+</Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="ToDoDetailPage"
          component={ToDoDetailPage}
          options={{title: ' Listeye Ekle '}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
