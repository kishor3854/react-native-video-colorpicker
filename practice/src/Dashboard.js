import React from 'react'
import {Tab, Tabs} from 'native-base';
import { View, Dimensions,StyleSheet,Text,ScrollView } from 'react-native';
import Video from './Video';
import Colorpicker from './colorpicker';

const {width,height} = Dimensions.get('screen')

export default Dashboard=()=>{
    return(
      
              <Tabs
            tabContainerStyle={{
              borderColor: '#ABABAB80',
              backgroundColor: '#f5f5f5',
              margin: 10,
            
            }}>
            <Tab
              heading="Video"
              tabStyle={{
                backgroundColor: '#FFFFFF',
                borderRightWidth: 1,
                borderRightColor: '#ABABAB',
              }}>
             <Video/>
            </Tab>

            <Tab
              heading="Strip"
              tabStyle={{
                backgroundColor: '#FFFFFF',
                borderRightWidth: 1,
                borderRightColor: '#ABABAB',
              }}>
              <Text>
                <Colorpicker/>
              </Text>
            </Tab>
           
          </Tabs>

       
    )
}

var styles = StyleSheet.create({
    containerStyle:{
        height:height,
        backgroundColor:'white'
    },
})