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

export default class WriteCode extends Component<Props> {
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


    render(){
        return (
            <View style={styles.contentCenter}>
                <Content>
                    {this._loginTitleHandle()}
                    {this._emailAddressHandle()}
                    {this._emailButton()}
                    {/* {this._emailPhoneSign()} */}
                </Content>
               
            </View>
        );
    }

    /**
     * 验证码登录标题
     */
    _loginTitleHandle=()=>{
        return (
            <View style={styles.loginContentView}>
                <Text style={styles.loginTitleHandle}>{I18njs.t('WriteCode.title')}</Text>
                <Text style={styles.littleTitle}>{I18njs.t('WriteCode.littleTitle')}</Text>
            </View>
        )
    }
    /**
     * 邮箱地址
     */
    _emailAddressHandle=()=>{
        return (
            <View style={[styles.emailBox, styles.contentCommon]}>
                <FormInput style={styles.emailInput} placeholder={I18njs.t('WriteCode.code')} />
                <Image style={styles.icon1} source={Images.Img.close}/>
                <Text  style={styles.btnColor} >2s</Text>
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
                    title={I18njs.t('WriteCode.btn')}
                    onPress={Actions.verificationcode}
                />
                <Text style={[styles.littleTitle,styles.textCenter]}>{I18njs.t('WriteCode.btnMsg')}</Text>
            </View>
        )
    }
    /**
     * 登录方式
     */
    // _emailPhoneSign=()=>{
    //     return (
    //         <View style={styles.contentCenterTop}>
    //             <Text style={styles.emailTextSign}>{I18njs.t('emailLogin.signLeftBotton')}</Text>
    //             <Text style={styles.emailTextForgot}>{I18njs.t('emailLogin.signRightButton')}</Text>
    //         </View>
    //     )
    // }
}
const styles = StyleSheet.create({
    contentCenter: {
        flex:1,
        height: px2dp(650),
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'white',
    },
    rightCon:{
        marginBottom:px2dp(8),
        width:px2dp(110),
        position:'absolute',
        right:px2dp(0),
    },
    textCenter:{
        textAlign:'center',
        alignItems:'center',
        marginTop:px2dp(13),
    },
    btnColor:{
        width:px2dp(64),
        height:px2dp(26),
        borderStyle: 'solid',
        borderColor: '#EEEEEE',
        backgroundColor:'#ffffff',
        borderWidth: 1,
        alignItems:'center',
        textAlign:'center',
        borderRadius: 3,
        position: 'absolute',
        top: 3,
        right: 12,
        zIndex: 3,
    },
    icon1:{
        width:px2dp(10),
        height:px2dp(10),
        marginRight:px2dp(20),

        position: 'absolute',
        top: 11,
        right:80,
        zIndex: 3,
    },
    littleTitle:{
        fontSize: 12,
        color: '#CED4DA',
        alignItems: 'center',
        marginTop:6,
    },
    contentCommon:{
        width: 350,
        padding: 0,
        marginLeft: px2dp(4),
    },
    loginContentView: {
        paddingTop: px2dp(22),
        marginLeft: px2dp(16),
    },
    loginTitleHandle: {
        fontFamily: 'PingFangSC-Regular',
        fontSize: 24,
        color: '#33383D',
        letterSpacing: 0.5,
        lineHeight: 27,
    },
    titleHeader: {
        width: 55,
        borderBottomWidth: px2dp(2),
        borderColor: '#6AE1C4',
        marginTop: px2dp(-5),
    },
    emailBox: {
        margin: px2dp(0),
        marginTop:px2dp(43),
        justifyContent:'space-between',
        position: 'relative',
    },
    emailInput: {
        width: 325,
        fontSize: 16,
        lineHeight: 19,
        color: '#CED4DA',
        padding:px2dp(0),
        borderColor: '#CED4DA',
        paddingBottom: px2dp(12),
        borderBottomWidth: px2dp(2),
        fontFamily: 'PingFangSC-Regular',
    },
    emailCodeBox: {
        padding: px2dp(0),
        marginTop:px2dp(44),
        position: 'relative',
    },
    emailPasswordBox: {
        marginTop:px2dp(41),
    },
    emailButtonBox:{
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
        width: 325,
        marginLeft: px2dp(16),
        flexDirection:'row', //主轴水平，起点在左，默认值
        flexWrap:'nowrap',   // 不换行， 默认
        justifyContent:'flex-start', // 左对齐，默认值
        flex:1, //只看中比例，不看重实际数值
    },
    emailTextSign: {
        width: 150,
        fontSize: 12,
        lineHeight: 18,
        color: '#78AEF9',
        textAlign: 'left',
        marginTop:px2dp(20),
        fontFamily: 'PingFangSC-Regular',
    },
    emailTextForgot: {
        width: 155,
        fontSize: 12,
        lineHeight: 18,
        color: '#78AEF9',
        textAlign: 'right',
        marginTop:px2dp(20),
        fontFamily: 'PingFangSC-Regular',
    },

});
