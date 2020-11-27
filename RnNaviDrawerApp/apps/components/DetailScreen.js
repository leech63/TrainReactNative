/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text children="Detail UI" />
                <View style={styles.button}>
                <Button title="open drawer"
                onPress={()=>this.props.navigation.dispatch(DrawerActions.openDrawer())} />
                <Button title="toggle drawer"
                onPress={()=>this.props.navigation.dispatch(DrawerActions.toggleDrawer())} />
            </View>
            </View>
        );
        }
}
const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection:'row',
    },
});
export default DetailScreen;