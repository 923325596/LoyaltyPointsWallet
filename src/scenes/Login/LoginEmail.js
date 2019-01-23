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
            <View style={styles.contentCenter}>
                <Content>
                    {this._loginTitleHandle()}
                    {this._emailAddressHandle()}
                    {this._emailPassword()}
                    {this._emailButton()}
                    {this._emailPhoneSign()}
                </Content>
                {/*<Container style={{backgroundColor:'#fafafa'}} >
                    <StatusBar backgroundColor={Color.bg}
                               barStyle="dark-content"
                               translucent={false}
                               hidden={false}/>
                    <View>
                        <View>
                            <Icon
                                color='#595F66'
                                name='bars'
                                size={22}
                                style={styles.iconStyle}
                                onPress={() =>
                                {}
                                }
                            />
                        </View>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Login</Text>
                        </View>
                        <FormLogin
                            label='Email'
                            placeholder='Your email address' />

                        <FormLogin
                            label='Password'
                            placeholder='Password' />

                        <View style={styles.accountInfo}>
                            <Text style={styles.accountDetail}>FORGOT PASSWORD</Text>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Button
                            buttonStyle={{marginTop: 5, height: 40 }}
                            title='LOGIN' />
                        <Text style={styles.footerText}>or login with your social account</Text>

                        <View style={styles.socialButtons}>
                            <Button
                                buttonStyle={styles.buttonMedia1}
                                iconLeft={{name: 'facebook-official', color: '#fff', size: 16, marginRight: 5}}
                                title='FACEBOOK'
                            />
                            <Button
                                buttonStyle={styles.buttonMedia2}
                                iconLeft={{name: 'twitter', color: Color.bg, size: 16, marginRight: 5}}
                                title='TWITTER'
                            />
                        </View>
                    </View>
                    <Text style={{fontSize:FONT_SIZE(20),color:Color.Tabtext}}>登录</Text>
                    <Text onPress={Actions.forgetpsw} style={{fontSize:FONT_SIZE(20),color:Color.Tabtext,marginTop:px2dp(20)}}>点我去忘记密码</Text>
                </Container>*/}
            </View>
        );
    }

    /**
     * 邮箱登录标题
     */
    _loginTitleHandle=()=>{
        return (
            <View style={styles.loginContentView}>
                <Text style={styles.loginTitleHandle}>Email Login</Text>
                <Text style={styles.titleHeader}></Text>
            </View>
        )
    }
    /**
     * 邮箱地址
     */
    _emailAddressHandle=()=>{
        return (
            <View style={[styles.emailBox, styles.contentCommon]}>
                <FormInput style={styles.emailInput} placeholder='Your email address' />
            </View>
        )
    }
    /**
     * 邮箱登录密码
     */
    _emailPassword=()=>{
        return (
            <View style={[styles.emailPasswordBox, styles.contentCommon]}>
                <FormInput style={styles.emailInput} placeholder='Password' />
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
                    title='SIGN UP'
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
                <Text style={styles.emailTextSign}>Password login</Text>
                <Text style={styles.emailTextForgot}>Forgot Password</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contentCenter: {
        flex:1,
        height: 650,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'white',
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
        marginTop: px2dp(-5)
    },
    emailBox: {
        margin: px2dp(0),
        marginTop:px2dp(73),
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
