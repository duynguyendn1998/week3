import React from 'react'
import {View,StyleSheet,Text,Image} from 'react-native'

const ChoiceCard = (props) => {
  const {choiceContainer,choiceCardTitle,choiceImage,choiceDescription}=styles
    return(
       <View style={choiceContainer}>
         <Text style={choiceCardTitle}>{props.playerName}</Text>
         <Image style={choiceImage} source={props.choice.uri} />
         <Text style={choiceDescription}>{props.choice.name}</Text>
       </View>
    )
}
const styles= StyleSheet.create(
{
  choiceContainer:{
    justifyContent:'center',
    alignItems:"center"
  },
  choiceDescription: {
    marginVertical:16,
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
  },
  choiceCardTitle: {
    marginVertical:18,
    fontSize: 25,
    color: '#250902',
  
  },
  choiceImage: {
    width: 110,
    height:100,
    padding: 10,
    resizeMode: 'stretch'
  }
});

export default ChoiceCard