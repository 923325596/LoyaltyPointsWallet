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
import {Icon, Button, FormLogin} from '../../components/Bucks/index';
import FormInput from '../../components/Bucks/form/FormInput';
import FormLabel from '../../components/Bucks/form/FormLabel';
import I18njs from '../../components/I18n/I18forJs';
type Props = {};
export default class Send extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        {/*第一个输入框*/}
        {this._renderViewOk()}
        {/*第二个输入框*/}
        {this._renderViewOk2()}
        {/*第三个输入框*/}
        {this._renderViewOk3()}
        {/*发送按钮*/}
        {this._rendersocialButtons()}
      </View>
    );
  }
  // 第一个输入框
  _renderViewOk=()=>{
    return (
      <View style={styles.ViewOk}>
        <FormLabel labelStyle={styles.TextSize}>
          {I18njs.t('deSend.formLabel')}
        </FormLabel>
        <FormInput
          // onSuccess={true}
          placeholder={I18njs.t('deSend.forminput')}
          underlineColorAndroid='transparent'
          containerStyle={styles.FormInputs} />
      </View>
    )
  };
  // 第二个输入框
  _renderViewOk2=()=>{
    return (
      <View style={styles.ViewOk2}>
        <FormLabel labelStyle={styles.TextSize}>
          {I18njs.t('deSend.formLabel2')}
          {/*<Text style={}> 注册</Text>*/}
        </FormLabel>
        <FormInput
          // onSuccess={true}
          placeholder={I18njs.t('deSend.forminput2')}
          underlineColorAndroid='transparent'
          containerStyle={styles.FormInputs} />
      </View>
    )
  };
  // 第三个输入框
  _renderViewOk3=()=>{
    return (
      <View style={styles.ViewOk3}>
        <FormLabel labelStyle={styles.TextSize}>
          {I18njs.t('deSend.formLabel3')}
        </FormLabel>
        <FormInput
          // onSuccess={true}
          underlineColorAndroid='transparent'
          placeholder={I18njs.t('deSend.forminput3')}
          containerStyle={styles.FormInputs} />
      </View>
    )
  };
  // 发送按钮
  _rendersocialButtons=()=>{
    return (
      <View style={styles.socialButtons}>
        <Button
          buttonStyle={styles.buttonStyle}
          title={I18njs.t('deSend.ButtonOk')}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    marginTop: px2dp(50),
    alignItems: 'center',
    //justifyContent: 'space-between',
  },
  ViewOk:{
    backgroundColor: '#FFFFFF',
    width: 327,
    flexDirection: 'row',
    display: 'flex',
    height:64,
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomColor: '#F9F9F9',
    borderBottomWidth: 1,
    borderTopLeftRadius:4,
    borderTopRightRadius:4,
  },
  ViewOk2:{
    backgroundColor: '#FFFFFF',
    width: 327,
    flexDirection: 'row',
    display: 'flex',
    height:64,
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomColor: '#F9F9F9',
    borderBottomWidth: 1,
  },
  ViewOk3:{
    backgroundColor: '#FFFFFF',
    width: 327,
    flexDirection: 'row',
    display: 'flex',
    height:64,
    alignItems: 'center',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  TextSize: {
    padding:0,
    width:75,
    color: '#2F3236',
    fontSize: 20,
    // backgroundColor: 'blue',
    marginTop:px2dp(-6),
    fontWeight: '200',
  },
  FormInputs: {
    flex: 1,
    borderBottomWidth: 0,
    padding:0,
    justifyContent: 'center',
    fontSize:18,
    color: "#8F96A1",
    // backgroundColor: 'red',
  },
  socialButtons: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between'

  },
  FormLogin1: {
    marginTop:px2dp(180),
  },
  buttonStyle:{
    marginTop:px2dp(25),
    height: 40,
    width:311,
    backgroundColor:'#6AE1C4',
    borderRadius:5,
      shadowColor: '#6AE1C4',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.6,
      shadowRadius: 15,
  }
});

