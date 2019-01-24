/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

type Props = {};
export default class Exchange2 extends Component<Props> {




    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:FONT_SIZE(20),color:Color.Tabtext}}>Exchange11</Text>
                <Text onPress={Actions.exchangerest} style={{fontSize:FONT_SIZE(20),color:Color.Tabtext,marginTop:px2dp(20)}}>点我登录</Text>
                <Text onPress={Actions.loginemail} style={{fontSize:FONT_SIZE(20),color:Color.Tabtext,marginTop:px2dp(20)}}>点我登录1</Text>
                <Text onPress={Actions.loginregemail} style={{fontSize:FONT_SIZE(20),color:Color.Tabtext,marginTop:px2dp(20)}}>点我登录2</Text>
                <Text onPress={Actions.loginregphone} style={{fontSize:FONT_SIZE(20),color:Color.Tabtext,marginTop:px2dp(20)}}>点我登录3</Text>
                <Text onPress={Actions.login} style={{fontSize:FONT_SIZE(20),color:Color.Tabtext,marginTop:px2dp(20)}}>点我登录4</Text>
            </View>

    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
var myStyles = StyleSheet.create({
    myCol:{

      flex:1,
      justifyContent:'center',
      alignItems:'stretch',
    }
})