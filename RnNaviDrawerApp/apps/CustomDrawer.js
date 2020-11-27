/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Image, Text, View,StyleSheet,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity } from 'react-native-gesture-handler';


class CustomDrawer extends Component{
    constructor(props) {
        super(props);
        this.items = [
            {
                navOptionIcon: 'home',
                navOptionName: 'HOME',
                screenName: 'Home',
            },
            {
                navOptionIcon: 'road',
                navOptionName: 'DETAIL',
                screenName: 'Detail',
            },
            {
                navOptionIcon: 'gear',
                navOptionName: 'SETTING',
                screenName: 'Setting',
            },
        ];
}

render() {
    return(
        <View style={styles.drawer}>
        
            <Image 
                source={require('./images/cat.png')} 
                style={styles.profile}/>
                <View style={styles.menuGroup}>
                {this.items.map ((item,key) => (

                <View key={key} 
                style={styles.menuItem} > 
                   {/*  <Text children={item.screenName} /> */}
                     <TouchableOpacity onPress={()=>this.props.navigation.navigate(item.screenName)}>
                    <View style={styles.touch}>
                      <Icon name={item.navOptionIcon} size={25} style={styles.menuIcon}/>
                      <Text children={item.navOptionName}/>
                    </View>
                   </TouchableOpacity>

                 </View>
                ))}
                </View>
        </View>
    );
}
}
const styles = StyleSheet.create({
  drawer:{
    backgroundColor:'#a9a9a9',alignItems:'baseline'},

  profile:{
        width:'100%', height:100,resizeMode:'stretch' },
    touch:{
        flexDirection:'row',
},
    menuGroup:{
        backgroundColor:'white',width:'100%'},
    menuItem:{
        padding:8,paddingLeft:10},
     menuIcon:{
            paddingRight:5},
});

export default CustomDrawer;

