import React, { Component } from 'react';
import { View, FlatList,Image,Text} from 'react-native';

const Chat=[{ img: require("./chat.jpg"),
Text1: "Talha",
Text2:"3:15 PM",
Text3: "Photo"

},
{ img: require("./chat.jpg"),
Text1: "Talha",
Text2:"3:15 PM",
Text3: "Photo"},

{ img: require("./chat.jpg"),
Text1: "Talha",
Text2:"3:15 PM",
Text3: "Photo"}
]

export default class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <FlatList
            data={Chat}
           
            showsHorizontalScrollIndicator={false}
            
            renderItem={({ item }) => {

              return (
                  <View>
                <View style={{flexDirection:"row"}}>
                
                 
              <Image style={{width:50,height:50,borderRadius: 800 / 2,marginTop:15}}  source={item.img} />
                  
                  
                  <View style={{paddingTop:20,flexDirection:"row"}}>
                  <Text style={{fontWeight:"bold",paddingLeft:20}}>{item.Text1}</Text>
                  <Text style={{paddingLeft:150}}>{item.Text2}</Text>
                  </View>
                  
                  </View>
                 
                
                 <Text style={{paddingLeft:70}}>{item.Text3}</Text>
                 <View
                  style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.5,
                    paddingHorizontal:10
                  }}
                />
                 
                </View>
                  
                 
              )



            }}
          />
        
      </View>
    );
  }
}
