import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChoiceButtons from './component/ChoiceButtons';
import CHOICES from './component/choice';
import ChoiceCard from './component/ChoiceCard';
import Head from './component/Head';
import {randomComputerChoice,getRoundOutcome} from './component/utils'

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      userChoice:{},
      computerChoice:{},
      result:"Make your choice"
    }
  }

 onButtonClick=(choice)=>{
    const userChoice=CHOICES.find(item => item.uri === choice)
    const computerChoice=randomComputerChoice()
    const result =getRoundOutcome(userChoice.name,computerChoice.name)
    this.setState({userChoice,computerChoice,result})    
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Head result={this.state.result}/>
        </View>
        <View style={styles.playArea}>
          <View style={styles.choicesContainer}>
              <ChoiceCard  playerName="You"
              choice={this.state.userChoice}/>
                <Text>VS</Text>
              <ChoiceCard playerName="Computer"
              choice={this.state.computerChoice}/>
          </View>
        </View>
        <View style={styles.choiceButtons}>
          <View>
            <ChoiceButtons onButtonClick={this.onButtonClick}/>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:5,
    marginTop:8,
  },
  header:{
    marginTop:20,
    flex:0.2,
  },
  playArea:{
    flex:0.64,
  },
  choiceButtons:{
    flex:0.16,
    alignItems: 'center',
    justifyContent: 'center',
  },
    choicesContainer: {
      height:300,
      marginVertical:10,
      borderWidth: 2,
      paddingTop: 10,
      shadowRadius: 5,
      paddingBottom: 20,
      borderColor: 'grey',
      shadowOpacity: 0.90,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent: 'space-around',
      shadowColor: 'rgba(0,0,0,0.2)',
      shadowOffset: { height: 5, width: 5 },
      borderRadius:50,
    }
});

