import React from 'react'
import { View,Button,SafeAreaView,TextInput,Text} from 'react-native'
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
const CreateScreen = props =>{
    const [date , setDate] = useState(new Date());
    const [storename,setStoreName] = useState('');
    const [starttime, setStartTime] = useState('');
    const [endtime, setEndTime] = useState('');

    const [isDisabled, setDisabled]= useState(true);
    const submitValue =()=>{
        const scheduledetails ={
            'Date' : date, 
            'Store': storename,
            'Start':starttime,
            'End':endtime
        }
        props.navigation.navigate('Test Screen',{scheduledetails})
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
            <Text style={{margin:12}}>Start Time</Text>
            <TextInput
                style={{margin:12,
                        borderWidth:1}}
                placeholder=""
                onChangeText={text=>setStartTime(text)}
            />
            <Text style={{margin:12}}>End Time</Text>
            <TextInput
                style={{margin:12,
                        borderWidth:1}}
                placeholder=""
                onChangeText={text=>setEndTime(text)}
            />
            <Button
            onPress={submitValue}
            title="Submit"/>
        </SafeAreaView>
    )
}

export default CreateScreen;