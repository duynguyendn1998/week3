import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity,Image} from 'react-native'
import CHOICE from './choice'

const ChoiceButtons = (props) => {
    return(
      <View style={styles.container}>
         {
           CHOICE.map(choice =>{
              return(
                <View key={choice.name} >
                  <TouchableOpacity  onPress={()=>props.onButtonClick(choice.uri)}>
                    <Image source={choice.uri} style={styles.buttonImage} />
                  </TouchableOpacity>
                </View>
              )
           })
         }
      </View>
    )
}

 const styles=StyleSheet.create({
      container:{
        flexDirection:"row",
        width:365,
        height:200,
        marginTop:50,
        justifyContent:'space-around',
      },
      buttonImage:{
        width:80,
        height:80,
        resizeMode: 'stretch'
      }
 })
export default ChoiceButtons