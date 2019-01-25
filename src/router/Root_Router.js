/**
 * Created by MZY on 2018/6/1.
 *  @format
 * @flow
 */
/*
 类似清单文件，注册所有界面
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Platform, BackHandler, NativeModules} from 'react-native';
import {Root} from "native-base";
import {
    Scene,
    Reducer,
    Router,
    Modal,
    Actions,
    Stack,
    Tabs,
    ActionConst,
} from 'react-native-router-flux';
import Toast from '@remobile/react-native-toast';
import Loading from '../components/Loading/Loading'
/**
 * import添加新页面
 * */

// //主界面  4个tab存放于这个界面
import Home from '../scenes/Home/Home';

// 4个tab界面
import Exchange from '../scenes/Exchange/Exchange'
import Send from '../scenes/Send/Send'
import Wallets from '../scenes/Wallets/Wallets'
import Request from '../scenes/Request/Request'
// tab的图标  以及名字
import TabIcon from '../components/TabIcon/TabIcon';

//登录
// import Login from '../scenes/Login/Login';


// 开始登录
import Login from '../scenes/Login/Login'
import LoginEmail from '../scenes/Login/LoginEmail'
import LoginRegEmail from '../scenes/Login/LoginRegEmail'
import LoginRegPhone from '../scenes/Login/LoginRegPhone'


//忘记密码
import ForgetPSW from '../scenes/Login/ForgetPSW';
//登录成功
import ExchangeRest from '../scenes/Exchange/Exchange_rest';
import ExchangePages from '../scenes/Exchange/Exchange_pages'

let self; //将App组件中的this赋给全局的self
global.showLoading = false; //所有子页面均可直接调用global.showLoading()来展示Loading
global.closeLoading = false; //所有子页面均可直接调用global.closeLoading()来关闭Loading
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
        borderTopWidth: 5,
        borderTopColor: '#FF0000',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },

    title: {
        fontWeight: 'normal', fontSize: 16, flex: 1, textAlign: 'center'
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: FONT_SIZE(15),
        flex: 1,
        textAlign: 'center'

    },
    navigationBarStyle: {
        backgroundColor: '#fff',
        flex: 1, alignItems: 'center',
        elevation: 0, borderBottomWidth: px2dp(1), borderBottomColor: '#e8e8e8'
    },
    leftIconStyle: {
        width: px2dp(20), height: px2dp(20)
    }

});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        // console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};

const getSceneStyle = () => ({
    backgroundColor: '#f9f9f9',
    shadowOpacity: 1,
    shadowRadius: 3,
});

//titleStyle={{alignSelf:'center'}}  居中标题
let down = 0;
let isExit = 1;

const onBackPress = () => {
    if (Actions.state.index === 0) {
        if (isExit == 0) {
            if (down && down + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                // console.log("app退出了");
                return false
            }
        }
        down = Date.now();
        Toast.show('再按一次退出应用');
        isExit = 0;
        return true
    }
    isExit = 1;
    Actions.pop();
    return true
};

type Props = {};
export default class Root_Router extends Component<Props> {
    async componentDidMount() {
        self = this;
        global.showLoading = function () {
            self.Loading.show();
        };
        global.closeLoading = function () {
            self.Loading.close();
        };
    }

    render() {
        return (
            <Root>
                <Router
                    backAndroidHandler={onBackPress}
                    createReducer={reducerCreate}
                    getSceneStyle={getSceneStyle}>
                    <Scene key="root" headerMode='screen'>
                        <Scene
                            key="home"
                            component={Home}
                            initial
                            hideNavBar
                            hideTabBar/>
                        <Scene
                            navigationBarStyle={[styles.navigationBarStyle]}
                            titleStyle={[styles.titleStyle]}
                            title="忘记密码"
                            key="forgetpsw"
                            component={ForgetPSW}
                            onRight={()=>{}}
                            rightTitle=""
                            duration={1}
                            hideNavBar={false}
                            // backButtonImage={require('../img/icon_class_n.png')}
                            leftButtonIconStyle={[styles.leftIconStyle]}
                        />
                        <Scene
                            navigationBarStyle={[styles.navigationBarStyle]}
                            titleStyle={[styles.titleStyle]}
                            title="登录"
                            key="login"
                            component={Login}
                            onRight={()=>{}}
                            rightTitle=""
                            duration={1}
                            hideNavBar={false}
                            // backButtonImage={require('../img/icon_class_n.png')}
                            leftButtonIconStyle={[styles.leftIconStyle]}
                        />

                        <Scene
                            navigationBarStyle={[styles.navigationBarStyle]}
                            titleStyle={[styles.titleStyle]}
                            title="登录成功"
                            key="loginemail"
                            component={LoginEmail}
                            onRight={()=>{}}
                            rightTitle=""
                            duration={1}
                            hideNavBar={false}
                            // backButtonImage={require('../img/icon_class_n.png')}
                            leftButtonIconStyle={[styles.leftIconStyle]}
                        />
                        <Scene
                            navigationBarStyle={[styles.navigationBarStyle]}
                            titleStyle={[styles.titleStyle]}
                            title="登录成功"
                            key="loginregemail"
                            component={LoginRegEmail}
                            onRight={()=>{}}
                            rightTitle=""
                            duration={1}
                            hideNavBar={false}
                            // backButtonImage={require('../img/icon_class_n.png')}
                            leftButtonIconStyle={[styles.leftIconStyle]}
                        />
                        <Scene
                            navigationBarStyle={[styles.navigationBarStyle]}
                            titleStyle={[styles.titleStyle]}
                            title="登录成功"
                            key="loginregphone"
                            component={LoginRegPhone}
                            onRight={()=>{}}
                            rightTitle=""
                            duration={1}
                            hideNavBar={false}
                            // backButtonImage={require('../img/icon_class_n.png')}
                            leftButtonIconStyle={[styles.leftIconStyle]}
                        />

                        <Scene
                            navigationBarStyle={[styles.navigationBarStyle]}
                            titleStyle={[styles.titleStyle]}
                            title="登录成功"
                            key="exchangerest"
                            component={ExchangeRest}
                            onRight={()=>{}}
                            rightTitle=""
                            duration={1}
                            hideNavBar={false}
                            // backButtonImage={require('../img/icon_class_n.png')}
                            leftButtonIconStyle={[styles.leftIconStyle]}
                        />
                        <Scene
                            navigationBarStyle={[styles.navigationBarStyle]}
                            titleStyle={[styles.titleStyle]}
                            title="交换登录"
                            key="exchangepages"
                            component={ExchangePages}
                            onRight={()=>{}}
                            rightTitle=""
                            duration={1}
                            hideNavBar={false}
                            // backButtonImage={require('../img/icon_class_n.png')}
                            leftButtonIconStyle={[styles.leftIconStyle]}
                        />
                        <Tabs
                            // type={ActionConst.REPLACE}
                            key="tabbar"
                            duration={0}
                            tabBarPosition={"bottom"}
                            tabBarStyle={{backgroundColor:'#fff'}}
                            // tabBarComponent={NavigationComponent}
                            hideNavBar
                            showLabel={false}
                            wrap={false}
                            animationEnabled={false}
                            tabs={true}
                            swipeEnabled={false}
                            lazy={true}
                        >
                            <Scene
                                key="wallets"
                                component={Wallets}
                                icon_id={0}
                                hideNavBar
                                icon={TabIcon}/>

                            <Scene
                                key="request"
                                icon={TabIcon}
                                icon_id={1}
                                component={Request}
                                hideNavBar
                            />

                            <Scene
                                key="send"
                                hideNavBar
                                icon_id={2}
                                icon={TabIcon}
                                component={Send}
                            />

                            <Scene key="exchange"
                                   hideNavBar
                                   icon_id={3}
                                   icon={TabIcon}
                                   component={Exchange}
                            />
                        </Tabs>
                    </Scene>
                </Router>
                <Loading ref={r=>{this.Loading = r}} hide={true}/>
            </Root>
        )
    }
};
/*titleStyle={{backgroundColor:'#ff0000',color:'#00ff00'}}标题Leaguer
 左标题style leftButtonStyle={{backgroundColor:'#00ff00',color:'#00ff00'}}
 */
