import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import CalcButton from './app/components/CalcButton';
import { useState } from 'react';

const btnRatio = 4;
const btnGap = 5;
const paddingSize = 5

const { width } = Dimensions.get('screen');

const btnWidth = (width -btnGap * btnRatio) / btnRatio - paddingSize/2;

const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '.'];

export default function App() {

  const [currentNumbers,setCurrentNumbers]=useState<string[]>([])
  console.log(currentNumbers)


  return (
    <View style={styles.container}>
      {/* Result Area */}

      <View style={styles.ResultContainer}>
        {/* Calculation */}

        <Text style={styles.calculations}>2065+666</Text>
        {/* Calculated Results */}
        <Text style={styles.result}>{2065+666}</Text>


      </View>

      {/* Button Areas */}

      <View style={styles.ButtonContainer}>
        <CalcButton onPress={()=>setCurrentNumbers([])} title={"AC"} style={styles.calcBtn} />
        <CalcButton title={"*"} style={styles.calcBtn} />
        <CalcButton title={"/"} style={styles.calcBtn} />
        <CalcButton title={"DEL"} style={styles.calcBtn} />

        {buttons.map(btn => {
          return <CalcButton onPress={()=>{
            setCurrentNumbers([...currentNumbers, btn])
          }} key={btn} title={btn} style={styles.calcBtn} />;
        })}
        <CalcButton title={"0"} style={[styles.calcBtn,styles.zero]} />
      <CalcButton title={"="} style={styles.calcBtn} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'flex-end'
  },

  ResultContainer: {
    // flex: Platform.OS==="ios" ?2:3,
    //flex: 2,
    alignItems:"flex-end",
    justifyContent:"flex-end",
    padding: 10,
  },
  ButtonContainer: {
    justifyContent:"center",
    alignItems:"center",
    //flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: btnGap,
    paddingHorizontal:paddingSize,
    alignContent:"flex-end",
    paddingBottom:20,
  },
  calcBtn: {
    width: btnWidth,
    height: btnWidth,
    borderWidth:1,
    borderColor:"black",
    borderRadius: 7,
  },
  zero:{
    width: (btnWidth *3) + paddingSize + btnGap
  },
  result:{
    fontWeight:'bold',
    fontSize: 30,
    color: 'black'
  },
  calculations:{
    fontWeight:'700',
    fontSize: 25,
    color: 'black',
    opacity:0.5
  }
});
