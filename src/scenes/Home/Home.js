/**
 * Created by Administrator on 2019/1/18.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import I18njson from '../../components/I18n/I18nforjson';


type Props = {};
export default class Home extends Component<Props> {

    state = { languages: [] };

    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.container}>
               <Text onPress={()=>Actions.tabbar({type: ActionConst.RESET})}>点我跳转到首页tab</Text>
                <View style={styles.block}>

                    <View style={{height:50,width:100}}>

                    </View>
                    <Text>{I18njson.t('helloworld')}</Text>
                    <Text>{I18njson.t('send')}</Text>
                </View>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 8,
    },
    block: {
        marginBottom: 16,
    },
    label: {
        fontWeight: '700',
        marginRight: 8,
    },
});
