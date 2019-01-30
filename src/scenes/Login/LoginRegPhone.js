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
import ModalDropdown from 'react-native-modal-dropdown';

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
            type: [
                '152782271622',
                '152793741622'
            ]
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
                {this._phoneAddressHandle()}
                <View style={styles.contentCenter}>
                    {this._verificationCode()}
                    {this._phonePassword()}
                    {this._phoneButton()}
                    {this._phonePhoneSign()}
                </View>
            </View>
        );
    }

    /**
     * 电话登录标题
     */
    _loginTitleHandle=()=>{
        return (
            <View style={[styles.loginContentView, {marginLeft: px2dp(32)}]}>
                <Text style={styles.loginTitleHandle}>{I18njs.t('loginRegPhone.title')}</Text>
            </View>
        )
    }
    /**
     * 电话 号码
     */
    _phoneAddressHandle=()=>{
        return (
            <View style={styles.phoneBox}>
                <Text style={styles.dropdownTextNum}> +86 </Text>
                <ModalDropdown
                    options={this.state.type}    //下拉内容数组
                    style={styles.modalModal}    //按钮样式
                    dropdownStyle={[styles.dropdownShow,{height:32 * this.state.type.length}]}    //下拉框样式
                    dropdownTextStyle={styles.dropdownText}    //下拉框文本样式
                >
                    <Image style={styles.imageStyle} source={Images.Img.down_arrow}/>
                </ModalDropdown>
                <FormInput containerStyle={styles.phoneFormInput} placeholder={I18njs.t('loginRegPhone.phone')} />
            </View>
        )
    }
    /**
     * Code
     */
    _verificationCode=()=>{
        return (
            <View style={styles.phoneCodeBox}>
                <FormInput containerStyle={[styles.phoneInput,{marginLeft: px2dp(5)}]} placeholder={I18njs.t('loginRegPhone.code')} />
                <Button
                    buttonStyle={styles.phoneInputButton}
                    title={I18njs.t('loginRegPhone.samllButton')}
                    color="#65D9E2"
                />
            </View>
        )
    }
    /**
     * Password
     */
    _phonePassword=()=>{
        return (
            <View style={styles.phonePasswordBox}>
                <FormInput containerStyle={[styles.phoneInput,{marginLeft: px2dp(5)}]} placeholder={I18njs.t('loginRegPhone.password')} />
            </View>
        )
    }
    _phoneButton=()=>{
        return (
            <View>
                <Button
                    buttonStyle={styles.phoneButtonBox}
                    title={I18njs.t('loginRegPhone.button')}
                />
            </View>
        )
    }
    _phonePhoneSign=()=>{
        return (
            <View>
                <Text style={styles.phoneTextSign}>{I18njs.t('loginRegPhone.signLeftBotton')}</Text>
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
    imageStyle: {
        width: px2dp(9),
        height: px2dp(6),
        marginTop: px2dp(7)
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
    titleHeader: {
        width: 55,
        borderColor: '#6AE1C4',
        marginTop: px2dp(-5)
    },
    phoneBox: {
        width: 310,
        height: px2dp(45),
        padding: px2dp(0),
        margin: px2dp(0),
        marginLeft: px2dp(32),
        marginTop:px2dp(74),
        borderColor: '#CED4DA',
        borderBottomWidth: px2dp(1),
        flexDirection:'row', //主轴水平，起点在左，默认值
        flexWrap:'nowrap',   // 不换行， 默认
        justifyContent:'flex-start', // 左对齐，默认值
    },
    dropdownTextNum: {
        width: 50,
        fontSize: 18,
        paddingTop: px2dp(3),
    },
    modalModal: {
        fontSize: 16,
        paddingTop: px2dp(6),
    },
    dropdownShow: {
        marginLeft: px2dp(-50),
        fontSize: 16,
    },
    dropdownText:{
        fontSize: 16,
        height: 30,
    },










    phoneView: {
        width: 93,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    phoneRegion: {
        // position: 'relative',
        // top: 0,
        // left: 0,
        fontSize: 16,
        // width: 70,
        // paddingLeft: px2dp(20),
    },
    phoneArrow: {
        position: 'absolute',
        // transform: 'rotate(45deg)',
        top: 0,
        right: 0,
    },
    phoneFormInput: {
        width: 255,
        fontSize: 16,
        height: 30,
        color: '#CED4DA',
        fontFamily: 'PingFangSC-Regular',
        borderBottomWidth: px2dp(0),
        // lineHeight: 19,
        // padding:px2dp(0),
        // paddingBottom: px2dp(12),
        // marginLeft: 100,
    },












    phoneInput: {
        width: 300,
        fontSize: 16,
        lineHeight: 19,
        color: '#CED4DA',
        padding:px2dp(0),
        borderColor: '#CED4DA',
        paddingBottom: px2dp(8),
        borderBottomWidth: px2dp(0),
        fontFamily: 'PingFangSC-Regular',
    },
    phoneCodeBox: {
        width: 310,
        borderColor: '#CED4DA',
        borderBottomWidth: px2dp(1),
        // padding: px2dp(0),
        marginTop:px2dp(36),
        position: 'relative',
    },
    phonePasswordBox: {
        width: 310,
        borderColor: '#CED4DA',
        borderBottomWidth: px2dp(1),
        marginTop:px2dp(41),
    },
    phoneButtonBox:{
        marginTop:px2dp(41),
        backgroundColor: '#6AE1C4',
        color: '#ffffff',
        borderRadius: 4,
        width: 325,
        height: 40,
        elevation: 6,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#6AD9E1',
        shadowOpacity: 0.24,
    },
    phoneTextSign: {
        width: 310,
        fontSize: 12,
        lineHeight: 18,
        color: '#78AEF9',
        textAlign: 'left',
        marginLeft: px2dp(-9),
        marginTop:px2dp(20),
        fontFamily: 'PingFangSC-Regular',
    },
    phoneInputButton: {
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
