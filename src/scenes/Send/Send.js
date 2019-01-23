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
//import I18njs from '../../components/I18n/I18forJs';
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

        {/*<Text>{I18njs.t('Tab.helloworld')}</Text>*/}
        {/*<Text>{I18njs.t('Tab.send')}</Text>*/}

        {/*<FormLogin*/}
        {/*label='Name'*/}
        {/*loginStyle={styles.FormLogin1}*/}
        {/*FormLoginStyle={styles.FormLogin1}*/}
        {/*placeholder='Name of the payee' />*/}

        {/*<FormLogin*/}
        {/*label='Number'*/}
        {/*placeholder='Integral number' />*/}

        {/*<FormLogin*/}
        {/*label='Notes'*/}
        {/*placeholder='Please fill in the notes' />*/}

      </View>
    );
  }
  // 第一个输入框
  _renderViewOk=()=>{
    return (
      <View style={styles.ViewOk}>
        <FormLabel labelStyle={styles.TextSize}>
          Name
          {/*<Text style={}> 注册</Text>*/}
        </FormLabel>
        <FormInput
          // onSuccess={true}
          placeholder="Name of the payee"
          containerStyle={styles.FormInputs} />
      </View>
    )
  };
  // 第二个输入框
  _renderViewOk2=()=>{
    return (
      <View style={styles.ViewOk2}>
        <FormLabel labelStyle={styles.TextSize}>
          Number
          {/*<Text style={}> 注册</Text>*/}
        </FormLabel>
        <FormInput
          // onSuccess={true}
          placeholder="Integral number"
          containerStyle={styles.FormInputs} />
      </View>
    )
  };
  // 第三个输入框
  _renderViewOk3=()=>{
    return (
      <View style={styles.ViewOk3}>
        <FormLabel labelStyle={styles.TextSize}>
          Notes
          {/*<Text style={}> 注册</Text>*/}
        </FormLabel>
        <FormInput
          // onSuccess={true}
          placeholder="Please fill in the notes"
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
          title='OK'/>
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
    color: '#2F3236',
    fontSize: 20,
    marginTop:px2dp(-6),
    fontWeight: '200',
  },
  FormInputs: {
    flex:4,
    justifyContent: 'center',
    fontSize:18,
    color: "#8F96A1",
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
    fontSize:16,
    borderRadius:5,
  }
});

