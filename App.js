import React from 'react'
import{
  View,StyleSheet
}from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Example from './src/Example';
import Flexbox from './src/FlexBox';


const Stack = createStackNavigator()



function MyStack()
{
  return(
    <Stack.Navigator>
   <Stack.Screen
        name = 'Example'
        component = {Example}
        options = {{headerShown:false}}
        />
        <Stack.Screen
          name ='Flexbox'
          component={Flexbox}
           options = {{headerShown:false}}
           /> 
           </Stack.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}




// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View , Button ,StatusBar} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
// import axios from 'axios';

//  function App() {
// const [task,setTask] = useState("");
//   const add = async() => {
//     try{
//       await AsyncStorage.setItem("dailyTask","Todays task");

//     }catch(e){
//       console.error(e);
//     }
//   }
//   const fetchData = () => {
//     axios.get("https://jsonplaceholder.typicode.com/users").then(response => console.log("response",response))
//   }
//   const get=async() =>{
//     try{
//      const value = await AsyncStorage.getItem("dailyTask");
//       if(value != null){
// setTask(value)
//     }else {
//       setTask("No Task")
//     } 
//   }
//   catch (e){
//     console.log(e)
//   }
//   }
//   return (
//     <View style={styles.container}>
//       <Text style={styles.textStyle}>{task}</Text>
      

// <View style={styles.button}>
//     <Button 
//     title="ADD"
//     onPress={add}>
//     </Button>
// </View>

// <View style={styles.button}>
//     <Button 
//     title="GET"
//     onPress={get}>
//     </Button>
// </View>

// <View style={styles.button}>
//     <Button 
//     title="Fetch API"
//     onPress={() => fetchData()}>
//     </Button>
// </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textStyle:{
//     fontSize:40,
//     marginBottom:30,
//   },
//   button:{
//     margin:20,
//     width:250
//   }
// });
