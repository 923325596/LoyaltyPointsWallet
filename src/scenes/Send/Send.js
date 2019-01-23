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
import {StyleSheet, Text, View} from 'react-native';
//import I18njs from '../../components/I18n/I18forJs';
type Props = {};
export default class Send extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:FONT_SIZE(20),color:Color.Tabtext}}>Send</Text>

                {/*<Text>{I18njs.t('Tab.helloworld')}</Text>*/}
                {/*<Text>{I18njs.t('Tab.send')}</Text>*/}
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

