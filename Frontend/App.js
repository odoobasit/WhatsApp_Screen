import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon, Tab, Tabs, TabHeading } from 'native-base';
import Chats from './Screens/Chats';
import Status from './Screens/Status';
import Call from './Screens/Call';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>

        <View style={{ backgroundColor: "#075E55", flexDirection: "row" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, paddingLeft: 15, paddingTop: 20 }}> WhatsApp </Text>
          <Icon name='search1' type='AntDesign' style={{ paddingLeft: 160, color: "white", fontSize: 18, paddingTop: 26, fontWeight: "bold" }} />
          <Icon name='dots-vertical' type='MaterialCommunityIcons' style={{ color: "white", fontSize: 22, paddingTop: 24, paddingLeft: 25, fontWeight: "bold" }} />
        </View>

   


        <ScrollView style={{flexDirection:"row",}}>
         
          
          
          <Icon name="camera" type="FontAwesome" style={{ color: "white", fontSize: 20,paddingLeft:6,paddingRight:6 }} />

            <Tabs  >

            
              <Tab heading="CHATS" tabStyle={{ backgroundColor: "#075E55" }} activeTabStyle={{ backgroundColor: "#075E55" }}>
                <Chats  />
              </Tab>
              <Tab heading="STATUS" tabStyle={{ backgroundColor: "#075E55" }} activeTabStyle={{ backgroundColor: "#075E55" }}>
                <Status />
              </Tab>
              <Tab heading="CALLS" tabStyle={{ backgroundColor: "#075E55" }} activeTabStyle={{ backgroundColor: "#075E55" }}>
                <Call />
              </Tab>

            </Tabs>

          </ScrollView>
      
      </View>

    );
  }
}
