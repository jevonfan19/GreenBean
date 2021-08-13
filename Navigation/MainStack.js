import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//import screens
import CreateScreen from '../Screen/CreateScreen'
import AgendaScreen from '../Screen/AgendaScreen'

const Drawer= createDrawerNavigator();

function MainStack(){
    return(
        <Drawer.Navigator initialRouteName="Agenda">
            <Drawer.Screen name="Agenda" component={AgendaScreen}/>
            <Drawer.Screen name="Create Shift" component={CreateScreen}/>
        </Drawer.Navigator>
    )
}
export {MainStack};