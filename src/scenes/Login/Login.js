/**
 * Created by Administrator on 2019/1/18.
 * @format
 * @flow
 */
import React,{Component} from 'react';
import { StyleSheet,View,Text,Dimensions,DeviceEventEmitter,Image,TouchableOpacity,TouchableNativeFeedback,ImageBackground,StatusBar,ART} from "react-native";
import {Container} from 'native-base'
import {Icon, Button, FormLogin} from '../../components/Bucks/index';
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
            <Container style={{backgroundColor:'#fafafa'}}>
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
                            iconLeft={{name: 'twitter', color: '#fff', size: 16, marginRight: 5}}
                            title='TWITTER'
                        />
                    </View>
                </View>
                <Text style={{fontSize:FONT_SIZE(20),color:Color.Tabtext}}>登录</Text>
                <Text onPress={Actions.forgetpsw} style={{fontSize:FONT_SIZE(20),color:Color.Tabtext,marginTop:px2dp(20)}}>点我去忘记密码</Text>
            </Container>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    iconStyle: {
        paddingLeft: 20,
        paddingTop: 30,
        width: 80,
        height: 60
    },
    header: {
        borderBottomWidth: 2,
        borderColor: '#78AEF9',
        marginTop: 40,
        marginBottom: 40,
        width: 55,
        paddingBottom: 5,
        marginLeft: 20,
    },
    headerText: {
        color: '#33383D',
        fontSize: 20,
        fontWeight: 'bold',
    },
    accountInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 20,
        height: 72,
    },
    accountDetail: {
        color: '#78AEF9',
        fontSize: 12,
        fontWeight: 'bold',
    },
    footer: {
        marginBottom: 40,
        flexDirection: 'column',
    },
    footerText: {
        margin: 18,
        textAlign: 'center',
        color: '#727D88',
        fontSize: 12,
    },
    socialButtons: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between'
    },

    buttonMedia1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
    },
    buttonMedia2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        backgroundColor: '#65C6F0',
    },
    textSocial: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 10,
    },
});