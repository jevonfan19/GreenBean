import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Calendar,Agenda,CalendarList} from 'react-native-calendars';

import { MainStack } from './Navigation/MainStack';
const RootStack= createDrawerNavigator();
const App =() =>{
  return(
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
            <RootStack.Screen
              name="Agenda"
              component={MainStack}
            />
          </RootStack.Navigator>
    </NavigationContainer>
          
  )
}
export default App;

