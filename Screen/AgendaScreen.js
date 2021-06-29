import React,{useState} from 'react'
import {Calendar,Agenda,CalendarList} from 'react-native-calendars';
import {View,TouchableOpacity,Text,Button} from 'react-native';
const AgendaScreen = props =>{
  const agendaitems= {
    '2021-06-28': [{store:'Atlantic Square',start_time:'6:00 AM',end_time:'10:00 AM' }]
  }
  
    return(
        <Agenda
        items={agendaitems}
        renderItem={(item)=>{return(<View><TouchableOpacity><Text>Store:{item.store} </Text><Text>Start:{item.start_time} End:{item.end_time}</Text></TouchableOpacity></View>);}}
        theme={{ 
          agendaTodayColor: 'green',}}>
        </Agenda>

        
    )
}

export default AgendaScreen;