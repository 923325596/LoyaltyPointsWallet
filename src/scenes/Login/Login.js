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
import I18njs from '../../components/I18n/I18forJs';
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
            <View style={styles.loginContentView}>
                <Text style={styles.loginTitleHandle}>{I18njs.t('login.title')}</Text>
            </View>
        )
    }
    /**
     * 邮箱地址
     */
    _emailAddressHandle=()=>{
        return (
            <View style={[styles.emailBox, styles.contentCommon]}>
                <FormInput containerStyle={styles.emailInput} underlineColorAndroid='transparent' placeholder={I18njs.t('login.address')} />
            </View>
        )
    }
    /**
     * 邮箱登录密码
     */
    _emailPassword=()=>{
        return (
            <View style={[styles.emailPasswordBox, styles.contentCommon]}>
                <FormInput containerStyle={styles.emailInput} underlineColorAndroid='transparent' placeholder={I18njs.t('login.password')} />
            </View>
        )
    }
    /**
     * 邮箱登录按钮
     */
    _emailButton=()=>{
        return (
            <View style={styles.contentCommon}>
                <Button
                    buttonStyle={styles.emailButtonBox}
                    title={I18njs.t('login.button')}
                />
            </View>
        )
    }
    /**
     * 登录方式
     */
    _emailPhoneSign=()=>{
        return (
            <View style={styles.contentCenterTop}>
                <Text style={styles.emailTextSign}>{I18njs.t('login.signLeftBotton')}</Text>
                <Text style={styles.emailTextForgot}>{I18njs.t('login.signRightButton')}</Text>
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
        justifyContent: 'center',
        alignItems:'center',
    },
    contentCommon:{
        // width: 350,
        padding: 0,
        marginLeft: px2dp(4),
    },
    loginContentView: {
        width: 65,
        borderStyle: 'solid',
        borderColor: '#6AE1C4',
        flexWrap: 'nowrap',
        borderBottomWidth:2,
        paddingTop: px2dp(22),
        paddingBottom: px2dp(36),
        marginLeft: px2dp(32),
    },
    loginTitleHandle: {
        width: 250,
        position: 'absolute',
        top: 22,
        fontFamily: 'PingFangSC-Regular',
        fontSize: 24,
        color: '#33383D',
        letterSpacing: 0.5,
        lineHeight: 27,
    },
    emailBox: {
        width: 300,
        margin: px2dp(0),
        marginTop:px2dp(73),
        borderColor: '#CED4DA',
        borderBottomWidth: px2dp(1),
    },
    emailInput: {
        fontSize: 16,
        lineHeight: 19,
        color: '#CED4DA',
        padding:px2dp(0),
        paddingBottom: px2dp(12),
        marginLeft: px2dp(0),
        borderBottomWidth: 0,
        fontFamily: 'PingFangSC-Regular',
    },
    emailCodeBox: {
        padding: px2dp(0),
        marginTop:px2dp(44),
        position: 'relative',
    },
    emailPasswordBox: {
        width: 300,
        borderColor: '#CED4DA',
        borderBottomWidth: px2dp(1),
        marginTop:px2dp(41),
        marginLeft: px2dp(30),
    },
    emailButtonBox:{
        marginTop:px2dp(41),
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
    emailInputButton: {
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderColor: '#6AD9E1',
        borderRadius: 3,
        borderWidth: 1,
        width: 65,
        height: 25,
        position: 'absolute',
        top: -38,
        right: 0,
        zIndex: 3,
    },


    contentCenterTop: {
        width: 300,
        marginLeft: px2dp(16),
        marginTop:px2dp(20),
        flexDirection:'row', //主轴水平，起点在左，默认值
        flexWrap:'nowrap',   // 不换行， 默认
        justifyContent:'flex-start', // 左对齐，默认值
        flex:1, //只看中比例，不看重实际数值
    },
    emailTextSign: {
        width: 149,
        fontSize: 12,
        lineHeight: 18,
        color: '#78AEF9',
        textAlign: 'left',
        fontFamily: 'PingFangSC-Regular',
    },
    emailTextForgot: {
        width: 149,
        fontSize: 12,
        lineHeight: 18,
        color: '#78AEF9',
        textAlign: 'right',
        fontFamily: 'PingFangSC-Regular',
    },

});
