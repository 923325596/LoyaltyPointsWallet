/**
 * Created by Administrator on 2019/1/18.
 * @format
 * @flow
 */
import React,{Component} from 'react';
import { StyleSheet,View,Text,Dimensions,DeviceEventEmitter,Image,TouchableOpacity,TouchableNativeFeedback,ImageBackground,StatusBar,ART} from "react-native";
import { Content, Container } from 'native-base'
import {Icon, Button, FormLogin, colors} from '../../components/Bucks/index';
import FormLabel from "../../components/Bucks/form/FormLabel";
import FormInput from "../../components/Bucks/form/FormInput";
import I18njs from "../../components/I18n/I18forJs";
// import Icon from '../../components/Bucks/icons/Icon'
//
// import Button from '../../components/Bucks/buttons/Button'
// import FormLogin from '../../components/Bucks/form/FormLogin'
type Props = {};

export default class Login extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            code: '',
            visible:false,
            timerCount:60,
            timerTitle:'获取验证码',
        };
    };

    componentWillMount() {

    }

    componentDidMount(){

    }

    componentWillUnmount(){

    };

    /**
     * 手机号的正则表达式
     * */
    checkPhoneNum=(phone)=>{
        let reg = /^1[3|5|7|8]\d{9}$/g;
        return reg.test(phone);
    };

    render(){
        return (
            <View style={styles.contentView}>
                {this._loginTitleHandle()}
                <View style={styles.contentCenter}>
                    {this._emailAddressHandle()}
                    {this._verificationCode()}
                    {this._emailPassword()}
                    {this._emailButton()}
                    {this._emailPhoneSign()}
                </View>
            </View>
        );
    }

    /**
     * 邮箱登录标题
     */
    _loginTitleHandle=()=>{
        return (
            <View style={[styles.loginContentView, {marginLeft: px2dp(32)}]}>
                <Text style={styles.loginTitleHandle}>{I18njs.t('loginRegEmail.title')}</Text>
            </View>
        )
    }
    /**
     * 邮箱地址
     */
    _emailAddressHandle=()=>{
        return (
            <View style={styles.emailBox}>
                <FormInput containerStyle={styles.emailInput} placeholder={I18njs.t('loginRegEmail.address')} />
            </View>
        )
    }
    /**
     * 邮箱验证
     */
    _verificationCode=()=>{
        return (
            <View style={styles.emailCodeBox}>
                <FormInput containerStyle={styles.emailInput} placeholder={I18njs.t('loginRegEmail.code')} />
                <Button
                    buttonStyle={styles.emailInputButton}
                    title={I18njs.t('loginRegEmail.samllButton')}
                    color="#65D9E2"
                />
            </View>
        )
    }
    /**
     * 邮箱登录密码
     */
    _emailPassword=()=>{
        return (
            <View style={styles.emailPasswordBox}>
                <FormInput containerStyle={styles.emailInput} placeholder={I18njs.t('loginRegEmail.password')} />
            </View>
        )
    }
    /**
     * 邮箱登录按钮
     */
    _emailButton=()=>{
        return (
            <View>
                <Button
                    buttonStyle={styles.emailButtonBox}
                    title={I18njs.t('loginRegEmail.button')}
                />
            </View>
        )
    }
    /**
     * 手机号登录
     */
    _emailPhoneSign=()=>{
        return (
            <View style={{marginLeft: px2dp(16)}}>
                <Text style={styles.emailTextSign}>{I18njs.t('loginRegEmail.signLeftBotton')}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contentView: {
        height: 650,
        backgroundColor: 'white',
    },
    contentCenter: {
        flex:1,
        alignItems:'center',
    },
    loginContentView: {
        width: 59,
        borderStyle: 'solid',
        borderColor: '#6AE1C4',
        borderBottomWidth:2,
        paddingTop: px2dp(22),
        paddingBottom: px2dp(9),
    },
    loginTitleHandle: {
        width: 260,
        fontFamily: 'PingFangSC-Regular',
        fontSize: 24,
        color: '#33383D',
        letterSpacing: 0.5,
        lineHeight: 27,
    },
    emailBox: {
        width: 310,
        borderColor: '#CED4DA',
        borderBottomWidth: px2dp(1),
        margin: px2dp(0),
        marginTop:px2dp(70),
    },
    emailInput: {
        width: 300,
        fontSize: 16,
        lineHeight: 19,
        color: '#CED4DA',
        padding:px2dp(0),
        marginLeft: px2dp(5),
        borderColor: '#CED4DA',
        paddingBottom: px2dp(8),
        borderBottomWidth: px2dp(0),
        fontFamily: 'PingFangSC-Regular',
    },
    emailCodeBox: {
        width: 310,
        borderColor: '#CED4DA',
        borderBottomWidth: px2dp(1),
        padding: px2dp(0),
        marginTop:px2dp(36),
        position: 'relative',
    },
    emailPasswordBox: {
        width: 310,
        borderColor: '#CED4DA',
        borderBottomWidth: px2dp(1),
        marginTop:px2dp(36),
    },
    emailButtonBox:{
        marginTop:px2dp(44),
        backgroundColor: '#6AE1C4',
        color: '#ffffff',
        borderRadius: 4,
        width: 300,
        height: 40,
        elevation: 6,
        shadowOffset: {width: 0, height: 8},
        shadowColor: '#6AD9E1',
        shadowRadius: 9,
        shadowOpacity: 0.24,
    },
    emailTextSign: {
        width: 310,
        fontSize: 12,
        lineHeight: 18,
        color: '#78AEF9',
        textAlign: 'left',
        marginTop:px2dp(20),
        fontFamily: 'PingFangSC-Regular',
    },
    emailInputButton: {
        fontFamily: 'PingFangSC-Regular',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#6AD9E1',
        borderRadius: 3,
        borderWidth: 1,
        fontSize: px2dp(12),
        width: 65,
        height: 30,
        position: 'absolute',
        top: -41,
        right: -12,
    },
});
