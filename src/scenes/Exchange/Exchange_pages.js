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
import {StyleSheet, Text, View, Image} from 'react-native';
import {Icon, Button, FormLogin} from '../../components/Bucks/index';
import FormLabel from '../../components/Bucks/form/FormLabel';
import ListItem from '../../components/Bucks/list/ListItem';
//import I18njs from '../../components/I18n/I18forJs';
type Props = {};
export default class ExchangePages extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        {/*第一个列表项*/}
        {this._renderViewOk()}
        {/*第二个列表项*/}
        {this._renderViewOk2()}
        {/*支付按钮*/}
        {this._rendersocialButtons()}

      </View>
    )
  }
  // 第一个列表项
  _renderViewOk=()=>{
    return (
      <View style={styles.ViewOk}>
        <Text style={styles.titleAll}>Loyalty Points</Text>
        <Text style={styles.messageAll}>2.51</Text>
      </View>
    )
  };
  // 第二个列表项
  _renderViewOk2=()=>{
    return (
      <View style={styles.ViewOk}>
        <Text style={styles.titleAll}>mode of payment</Text>
        <Image style={styles.icon1} source={Images.Img.pay_icon} />
      </View>
    )
  };

  // 支付按钮
  _rendersocialButtons=()=>{
    return (
      <View style={styles.ViewOk2}>
        <Button
        onPress={Actions.exchangerest}
        buttonStyle={styles.buttonStyle}
        title='PAY'/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    marginTop: px2dp(20),
    alignItems: 'center',
    //justifyContent: 'space-between',
  },
  icon1: {
    backgroundColor: '#7BB0FD',
    width: px2dp(27),
    height: px2dp(27),
    alignItems: 'center',
    justifyContent: 'center',
    margin: px2dp(8),
  },
  titleAll:{
    color: '#2F3236',
    fontSize: 18,
    fontWeight: '200'
  },
  messageAll:{
    fontSize: 21,
    color: '#2F3236',
    fontWeight: '700'
},
  ViewOk:{
    backgroundColor: '#FFFFFF',
    width: px2dp(347),
    flexDirection: 'row',
    display: 'flex',
    height:px2dp(64),
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomColor: '#F9F9F9',
    borderBottomWidth: 1,
    borderTopLeftRadius:4,
    borderTopRightRadius:4,
    justifyContent:'space-between',
    padding:px2dp(20)
  },
  ViewOk2:{
    backgroundColor: '#FFFFFF',
    width: px2dp(347),
    flexDirection: 'row',
    display: 'flex',
    height:px2dp(80),
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomColor: '#F9F9F9',
    borderBottomWidth: 1,
    borderTopLeftRadius:4,
    borderTopRightRadius:4,
    justifyContent:'space-between',
    paddingTop:px2dp(20),
    paddingBottom:px2dp(20)
  },
  TextSize: {
    color: '#2F3236',
    fontSize: 20,
    marginTop:px2dp(-6),
    fontWeight: '200',
  },

  socialButtons: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between'

  },
  buttonStyle:{
    height: px2dp(40),
    width:px2dp(317),
    backgroundColor:'#6AE1C4',
    fontSize:18,
    borderRadius:5,
  }
});

