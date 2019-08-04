import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'

    var total=0;
    var lose=0;
    var win=0;
    var tied=0;

const Head = (props) => {
  const getResultColor = () => {
    if (props.result === 'Victory!')
        {
        win +=1;
        total +=1;
        return 'green';
        } 
    if (props.result === 'Defeat!') 
    {
     lose +=1;
     total +=1;
      return 'red';
    }
    if (props.result === 'Tie game!')
    {
        tied += 1;
        total +=1;
        return null;
    }
  };
  const init = ()=>
  {
    if(win > lose)
    {
      alert("Congratulation! \n"+ "Win: " + (Math.floor(win*100/(win + lose))) + "%\t Lose:"+ (Math.floor(lose*100/(win + lose)))+"%");
      return total = win = tied = lose = 0;
    }
    if(win < lose)
    {
      alert("Gameover! \n"+ "Win: " + (Math.floor(win*100/(win + lose))) + "%\t Lose:"+ (Math.floor(lose*100/(win + lose)))+"%");
      return total = win = tied = lose = 0;
    }
    else{
      alert("Tie game!")
      return total = win = tied = lose = 0;
    }
    
  }
  // console.log("total   "+total)
  // console.log("win        "+win)
  return (<View style={styles.header}  >
    <View style={styles.Wrapper}>
      <Text style={{fontSize:25,color:getResultColor()}}>{props.result}</Text>
    </View>
    <View style={styles.score}>
      <Text style={{color:'green'}}>Win: {win}/{total}</Text>
      <Text>Tied: {tied}/{total}</Text>
      <Text style={{color:'red'}}>Lose: {lose}/{total}</Text>
      <TouchableOpacity style={styles.replay} onPress={init}>
        <Text style={styles.Text}>REPLAY</Text>
      </TouchableOpacity>
    </View>
  </View>);
}
const styles= StyleSheet.create(
{
  header:{
    flex:1,
  },
  Text:{
    fontSize:18,
    color:'white',
    marginHorizontal:7,
    marginVertical:3,
  },
  replay:{
      width:80,
      height:30,
      borderRadius:10,
      backgroundColor:'blue'
  },
  score:{
    flex:0.8,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  Wrapper:{
    flex:0.2,
    marginVertical:20,
    alignItems:'center',
    justifyContent:'center',
  }
});

export default Head;