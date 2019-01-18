/**
 * @flow
 * Created by MZY on 2018/6/2.
 */

 import { Dimensions, PixelRatio, Platform } from 'react-native';
 import Theme from './Theme';
 import px2dp from './px2dp';
 import Images from './Images'
import Color from './Color'
 import { FontSize } from './FontSize';
 import Toast from '@remobile/react-native-toast';
 import {Actions,ActionConst} from "react-native-router-flux";
 import Storage  from '../utils/Storage';
 import Config from './../utils/Config';
// import MyIcon from './../components/IconFont/IconFont'

const {height, width} = Dimensions.get('window');

 global.Theme = Theme;
 global.px2dp = px2dp;
global.Color = Color;
global.Images = Images;

 //底部弹窗提示
 global.Toast = Toast;

// //常量
 global.Config = Config;
//
 //本地存储
 global.Storage = Storage;
//
// 获取屏幕宽度
global.SCREEN_WIDTH = width;
// 获取屏幕高度
global.SCREEN_HEIGHT = height;
 // 适配字体
 global.FONT_SIZE = FontSize;

 // 系统是iOS
global.iOS = (Platform.OS === 'ios');
 // 系统是安卓
global.Android = (Platform.OS === 'android');

 global.Actions = Actions;
 global.ActionConst = ActionConst;



