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

export default class PhoneGetCode extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            code: '',
            visible:false,
            timerCount:60,
            timerTitle:'获取验证码',
            type: [
                '111',
                '222'
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
            <View style={styles.contentCenter}>
                <Content>
                    {this._loginTitleHandle()}
                    {this._phoneAddressHandle()}
                    {this._phoneButton()}
                    {this._phonePhoneSign()}
                </Content>
            </View>
        );
    }
    _loginTitleHandle=()=>{
        return (
            <View style={styles.loginContentView}>
                <Text style={styles.loginTitleHandle}>{I18njs.t('PhoneGetCode.title')}</Text>
                <Text style={styles.titleHeader}></Text>
            </View>
        )
    }
    _phoneAddressHandle=()=>{
        return (
            <View style={[styles.phoneBox, styles.contentCommon, styles.contentCenterTop]}>
                <Text style={styles.dropdownTextNum}> +86 </Text>
                <ModalDropdown
                    options={this.state.type}    //下拉内容数组
                    style={styles.modalModal}    //按钮样式
                    dropdownStyle={[styles.dropdownShow,{height:32 * this.state.type.length}]}    //下拉框样式
                    dropdownTextStyle={styles.dropdownText}    //下拉框文本样式
                >
                    <Image style={styles.imageStyle} source={Images.Img.down_arrow}/>
                </ModalDropdown>
                <FormInput style={styles.phoneFormInput} placeholder={I18njs.t('PhoneGetCode.phoneNumber')} />
            </View>
        )
    }
    _phoneButton=()=>{
        return (
            <View style={styles.contentCommon}>
                <Button
                    buttonStyle={styles.phoneButtonBox}
                    title={I18njs.t('PhoneGetCode.btn')}
                />
            </View>
        )
    }
    _phonePhoneSign=()=>{
        return (
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.phoneTextSign}>{I18njs.t('PhoneGetCode.email')}</Text>
                <Text style={styles.phoneTextSign2}>{I18njs.t('PhoneGetCode.password')}</Text>
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
    imageStyle:{
        width:px2dp(9),
        height:px2dp(6),
        marginTop:px2dp(7)
    },
    contentCommon:{
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
    phoneBox: {
    },

    contentCenterTop: {
        width: 325,
        padding: 0,
        margin: px2dp(0),
        marginLeft: px2dp(16),
        marginTop:px2dp(73),
        borderColor: '#CED4DA',
        borderBottomWidth: px2dp(2),
        flexDirection:'row', //主轴水平，起点在左，默认值
        flexWrap:'nowrap',   // 不换行， 默认
        justifyContent:'flex-start', // 左对齐，默认值
        flex:1, //只看中比例，不看重实际数值
    },
    dropdownTextNum: {
        width: 50,
        fontSize: 18,
        paddingTop: px2dp(3),
    },
    modalModal: {
        fontSize: 18,
        paddingTop: px2dp(6),
    },
    dropdownShow: {
        marginLeft: px2dp(-50),
        fontSize: 16,
    },
    dropdownText:{
        fontSize: 16,
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
        width: 280,
        fontSize: 16,
        lineHeight: 19,
        color: '#CED4DA',
        padding:px2dp(0),
        paddingBottom: px2dp(12),
        // marginLeft: 100,
        fontFamily: 'PingFangSC-Regular',
    },












    phoneInput: {
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
    phoneCodeBox: {
        padding: px2dp(0),
        marginTop:px2dp(44),
        position: 'relative',
    },
    phonePasswordBox: {
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
        fontSize: 12,
        lineHeight: 18,
        color: '#78AEF9',
        textAlign: 'left',
        marginLeft: px2dp(16),
        marginTop:px2dp(20),
        fontFamily: 'PingFangSC-Regular',
    },
    phoneTextSign2: {
        fontSize: 12,
        lineHeight: 18,
        color: '#78AEF9',
        textAlign: 'right',
        marginRight: px2dp(16),
        marginTop:px2dp(20),
        fontFamily: 'PingFangSC-Regular',
    },
    phoneInputButton: {
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

});
