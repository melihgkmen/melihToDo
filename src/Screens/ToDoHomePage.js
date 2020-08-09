import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
} from 'react-native';
import {Input, Button} from '../Components';
import {connect, useDispatch} from 'react-redux';
const ToDoHomePage = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Gelen: ', props.route.params?.obj);

    if (props.route.params?.obj) {
      let arr = data.slice();
      arr.push(props.route.params?.obj);
      setData(arr);
    }
  }, [props.route.params?.obj]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.dsc}>{item.dsc}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  marginTop: 20,
                  height: 300,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 10, marginBottom: 30}}>
                  Herhangi bir veri bulunamadı.
                </Text>

                <Button
                  text={'EKLE'}
                  onPress={() => {
                    props.navigation.navigate('ToDoDetailPage', {
                      data,
                    });
                  }}
                />
              </View>
            );
          }}
          initialNumToRender={2}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'yellow',
  },
  title: {
    fontSize: 18,
  },
  dsc: {
    fontSize: 14,
    color: 'yellow',
  },
});

const mapStateToProps = (state) => {
  console.log('Gelen data: ', state);
  const {list, loading, data} = state.listResponse;
  return {list, list, data};
};

export default connect(mapStateToProps, {})(ToDoHomePage);
