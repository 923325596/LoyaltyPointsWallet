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

//import I18njson from '../../components/I18n/I18nforjson';
import XPay from 'react-native-puti-pay'

type Props = {};
export default class Home extends Component<Props> {
    constructor(props) {
        super(props);
        XPay.setAlipayScheme('ap2017102209453437')
    }

    componentWillMount() {

    }

    _payTest=()=>{
        XPay.alipay('app_id=2015052600090779&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22IQJZSRC1YMQB5HU%22%7D&charset=utf-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Fdomain.merchant.com%2Fpayment_notify&sign_type=RSA2&timestamp=2016-08-25%2020%3A26%3A31&version=1.0&sign=cYmuUnKi5QdBsoZEAbMXVMmRWjsuUj%2By48A2DvWAVVBuYkiBj13CFDHu2vZQvmOfkjE0YqCUQE04kqm9Xg3tIX8tPeIGIFtsIyp%2FM45w1ZsDOiduBbduGfRo1XRsvAyVAv2hCrBLLrDI5Vi7uZZ77Lo5J0PpUUWwyQGt0M4cj8g%3D',
            res => {
                console.log('回调', res);
                const {result, memo, resultStatus} = res;
                if (resultStatus === '9000') {
                    Toast.show('充值成功')
                } else {
                    Toast.show('充值失败')
                }
            })
    }

    render() {
        return (
            <View style={styles.container}>
               <Text onPress={()=>Actions.tabbar({type: ActionConst.RESET})}>点我跳转到首页tab</Text>
                <View style={styles.block}>

                    <View style={{height:50,width:100}}>

                    </View>
                    <Text onPress={()=>{this._payTest()}}>支付宝支付测试</Text>
                    {/*<Text>{I18njson.t('send')}</Text>*/}
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
