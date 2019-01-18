/** @format */


import { AppRegistry } from 'react-native';
import './src/common/Global';
import Root_Router from './src/router/Root_Router';
import {name as appName} from './app.json';

if (!__DEV__) {
    global.console = {
        info: () => {
        },
        log: () => {
        },
        warn: () => {
        },
        error: () => {
        },
    };
}
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];

console.disableYellowBox = true // 关闭全部黄色警告

AppRegistry.registerComponent(appName, () => Root_Router);


