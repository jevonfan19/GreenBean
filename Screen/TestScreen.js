import React,{useState} from 'react'
import { View,Text } from 'react-native'
const TestScreen = props =>{
    const [storename,setStorename] = useState(props.route.params.scheduledetails.Store);
    const [date , setDate] = useState(props.route.params.scheduledetails.Date);
    const [starttime, setStartTime] = useState(props.route.params.scheduledetails.Start);
    const [endtime, setEndTime] = useState(props.route.params.scheduledetails.End);
    return(
        <View>
            <Text>{storename} , {date} , {endtime} , {starttime}</Text>
        </View>
    )
}

export default TestScreen;