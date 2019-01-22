/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, List} from 'react-native-bucks';
import {StyleSheet, View, Alert, TouchableHighlight, Text, Platform, ScrollView, Dimensions} from 'react-native';

type Props = {};
export default class Exchange extends Component<Props> {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:FONT_SIZE(20),color:Color.Tabtext}}>Exchange</Text>
                <Text onPress={Actions.login} style={{fontSize:FONT_SIZE(20),color:Color.Tabtext,marginTop:px2dp(20)}}>点我去登录</Text>
                <List></List>
                <Button>PAY</Button>
            </View>
        );
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

