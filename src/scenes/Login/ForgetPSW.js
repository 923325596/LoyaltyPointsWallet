/**
 * Created by Administrator on 2019/1/18.
 */
/**
 * Created by Administrator on 2019/1/18.
 * @format
 * @flow
 */
import React,{Component} from 'react';
import { StyleSheet,Text,Dimensions,DeviceEventEmitter,Image,TouchableOpacity,TouchableNativeFeedback,ImageBackground,StatusBar,ART} from "react-native";
import {Container} from 'native-base'

type Props = {};



export default class ForgetPSW extends Component<Props> {
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

                <Text style={{fontSize:FONT_SIZE(20),color:Color.Tabtext}}>忘记密码</Text>

            </Container>

        );
    }
}
