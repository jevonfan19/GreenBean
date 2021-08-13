import React ,{useState}from 'react';
import { View,Text,Button} from 'react-native';
import axios from 'axios';



const ActionModals = props =>{

    const [shift_id,setShiftId]= useState()
    const operation_url = `http://192.168.1.26:3000/schedules/${props.route.params.id}`;

   //Covers the shift 
   const coverShift =() =>{
       //sends a text to manager
       //deletes it from database
        axios.delete(operation_url)
       .then(res=>{
           console.log(res);
           console.log(res.data);
       })
   }

   //Edit Shift will take you to another page that will display the details of the shift and then the user can edit it 
   const editShift=()=>{
        //will take the user to another screen, passing the id param to that screen for editing
        props.navigate.navigate('EditScreen',{id:props.route.params.id})
   }

   //Delete the shift 
   const deleteShift=()=>{
        axios.delete(operation_url)
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })

   }

    return(
        <View>
            <Text>{props.route.params.id}</Text>
            <Button title="Cover"/>
            <Button title="Edit"/>
            <Button title="Delete" onPress={deleteShift}/>
            <Button title="Go Back" onPress={()=>props.navigation.goBack()}/>
        </View>
    )
}

export default ActionModals;