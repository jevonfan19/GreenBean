import React,{useState,useEffect} from 'react'
import {Calendar,Agenda,CalendarList} from 'react-native-calendars';
import {View,TouchableOpacity,Text,Button} from 'react-native';
import axios from 'axios';

//convert data from api which is an array into an object
const array_to_object=(array,key)=>
  array.reduce(
    (obj,item) =>({
      ...obj,
      [item[key]]:[item]
    }),
    {}
  );

const AgendaScreen = props =>{

  const [testApi,setTestApi] = useState([]);
  const [events, setEvents] = useState();
  const [dataLoaded,setDataLoaded] = useState(false);
  
  //Gets data from api , loads only once
  useEffect(() => {
      getDataUsingAsyncAwaitGetCall();
  },[])


  //async function to make get request to api
  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.26:3000/schedules',
      );
      //this will be used to sort the data that is returned from the api
      setEvents(array_to_object(response.data,'day'))
      setDataLoaded(true);
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };

  //this is used to format how each event in the agenda will look
  const renderItem =(item,firstItemInDay)=>{
    console.log('rendering',item)
    return(
      <TouchableOpacity onPress={()=>{props.navigation.navigate(('ActionModals'),{id:item._id})}} >
        <Text>ID: {item._id}</Text>
        <Text>Store: {item.store}</Text>
      </TouchableOpacity>
    );
  }

    return(
        
        <Agenda
        items={events}
        renderItem={ (item,firstItemInDay)=>{return (renderItem(item,firstItemInDay))}}
        theme={{ 
          agendaTodayColor: 'green',}}>
        </Agenda>

        
    )
}

export default AgendaScreen;