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
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

type Props = {};
export default class Request extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                {/*//二维码大方块*/}
                <View style={styles.fangkuai}>
                    <View style={styles.fangkuaitou}>
                        <Image style={styles.fangkuaitou1} source={require('../../components/Bucks/images/visa.png')} />
                        <Text style={styles.fangkuaitou2}>QR</Text>
                        <Text style={styles.fangkuaitou3}>code111111111git </Text>
                    </View>
                </View>
                {/*第二部分*/}
                <View style={styles.dierbu}>

                </View>
                {/*第三部分*/}
                <View style={styles.disanbu}>

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
        backgroundColor: '#78AEF9',
    },
    fangkuai:{
        width:327,
        height:320,
        backgroundColor: '#FFFFFF',
    },
    fangkuaitou:{
        width:300,
        height:60,
        backgroundColor: '#CED4DA',
        textAlign: 'left',
        flexDirection: 'row',
    },
    fangkuaitou1:{
        marginLeft: px2dp(10),
        paddingTop: px2dp(10),
        borderRadius: 22,
        width: 25,
        height: 25,
    },
    fangkuaitou2:{
        marginLeft: px2dp(10),
        fontSize: 14,
    },
    fangkuaitou3:{
        marginLeft: px2dp(10),
        fontSize: 14,
    },
    dierbu:{
        marginTop: px2dp(25),
        width:327,
        height:50,
        backgroundColor: '#A2C8FC',
    },
    disanbu:{
        marginTop: px2dp(5),
        width:327,
        height:130,
        backgroundColor: '#A2C8FC',
    }
});