import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';

const Example = () => {

  // To get the value from the TextInput
  const [textInputValue, setTextInputValue] = useState('');
  // To set the value on Text
  const [getValue, setGetValue] = useState('');
const [updateValue, setUpdateValue] = useState('')
  const saveValueFunction = () => {
    // Function to save the value in AsyncStorage
    if (textInputValue) {
      // To check the input not empty
      AsyncStorage.setItem('a', textInputValue);
      // Setting a data to a AsyncStorage with respect to a key
      setTextInputValue('');
      // Resetting the TextInput
      alert('Data Saved');
      // Alert to confirm
    } 
  };

  const getValueFunction = () => {
    // Function to get the value from AsyncStorage
    AsyncStorage.getItem('a').then(
      (value) =>
        // AsyncStorage returns a promise
        // Adding a callback to get the value
        setGetValue(value),
      // Setting the value in Text
    );
  };

  return (
    <SafeAreaView style={{ flex: 1,}}>
      <View style={styles.container}>
       
        <TextInput 
          placeholder="Enter Text "
          value={textInputValue}
          onChangeText={(data) => setTextInputValue(data)}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={saveValueFunction}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
           ADD
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getValueFunction}
          style={styles.buttonStyle1}>
          <Text style={styles.buttonTextStyle}>
            GET 
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {getValue}
        </Text>

       

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    textAlign: 'center',
    marginTop:50,
    fontSize:20,
    color:'black',
    fontWeight:'bold'

  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    marginTop: 62,
    marginLeft:80,
    width:150,
    height:40,
    borderRadius:5

  },
  buttonStyle1: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    marginTop: 32,
    marginLeft:80,
    width:150,
    height:40,
    borderRadius:5

  },
  
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '50%',
    borderWidth: 1,
    borderColor: 'green',
    marginTop:70,
    marginLeft:70,
    borderRadius:5
  },
});

export default Example;


