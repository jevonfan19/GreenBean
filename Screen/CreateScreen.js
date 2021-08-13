import React from 'react'
import { View,Button,SafeAreaView,TextInput,Text} from 'react-native'
import { useState } from 'react';
import axios from 'axios';
const CreateScreen = props =>{

    //hooks to store data 
    const [date , setDate] = useState('');
    const [storename,setStoreName] = useState('');

    
    //sends what the user wrote to 
    const submitValue =()=>{
        axios.post('http://192.168.1.26:3000/schedules',{
            store:storename,
            day: date,
        })
        .then(function (response){
            props.navigation.navigate('Agenda')
            console.log(response);
        })
        .catch(function(error){
            console.log(JSON.stringify(error));
        })

    }
    const showDate=()=>{
        setDisabled(false);
    }
    return(
        <SafeAreaView style={{alignContent:"center"}}>
            <Text style={{margin:12}}>Store Name</Text>
            <TextInput
                style={{margin:12,
                        borderWidth:1}}
                placeholder="Store Name"
                onChangeText={text=>setStoreName(text)}
            />
            <Text>Date</Text>
            <TextInput
                style={{margin:12,
                    borderWidth:1}}
                placeholder=""
                onChangeText={text=>setDate(text)}
            />
            <Button
            onPress={submitValue}
            title="Submit"/>
        </SafeAreaView>
    )
}

export default CreateScreen;