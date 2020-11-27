/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const Counter = ({index,value,handleIncrement,handleDecrement}) => {
    return (
        <View style={styles.outline}>

           {/* <Text children={'Count : ${value.counterNum}'} /> */}
            <Text>Count: {value.counterNum}</Text>
            <View style={styles.counterButton}>
                <TouchableOpacity
                    style={styles.button} 
                    onPress={() => handleIncrement(index)}>
                    <Text children="+" style={styles.buttonText}/>
                </TouchableOpacity>
                <Text children="    " />
                <TouchableOpacity
                    style={styles.button}  
                    onPress={() => handleDecrement(index)}>
                    <Text children="-" style={styles.buttonText}/>
                </TouchableOpacity>
               
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
outline:
    {justifyContent: 'center',alignItems: 'center'},
    counterButton:
{flex: 1, flexDirection: 'row', width: '100%',justifyContent: 'center',alignItems: 'center'},

button:
{backgroundColor:'#d142ff',width:50,justifyContent:'center',alignItems:'center',height:40,borderRadius:5},
buttonText:
{color:'white',fontWeight:'bold',fontSize:20}
});

Counter.propTypes = {
    index: PropTypes.number,
    value: PropTypes.object,
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
};

Counter.defaultProps = {
    index: 0,
    value: { counterNum: 0 },
    handleIncrement: () => console.warn('handleIncrement not defined'),
    handleDecrement: () => console.warn('handleDecrement not defined'),
};

export default Counter;