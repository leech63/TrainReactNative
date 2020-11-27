/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Button,StyleSheet,Text,View} from 'react-native';


function DetailScreen({navigation}){
    return(
        <View style={styles.layoutStyle}>
        <View style={styles.buttonStyle}>
      
      <Button title="뒤로" onPress={() => navigation.goBack()}/>
      <Button title="최초화면으로" onPress={() => navigation.popToTop()}/>
        
       </View>
        <View style={styles.mainStyle}>
          <Text children="UI Layout" />
        </View>
      </View>
      );
    }
    

  const styles=StyleSheet.create({
    layoutStyle:{
      flex:1,
      flexDirection:'column',
    },
   buttonStyle:{
      flexDirection:'row', 
      alignItems: 'baseline', 
      justifyContent: 'flex-start', 
  },
  mainStyle:{
    backgroundColor:'#9e9e9e',  
    flex: 1,
   
},
  });
  export default DetailScreen;