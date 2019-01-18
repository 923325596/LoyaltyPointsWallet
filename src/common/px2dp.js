/**
 * Author   : MZY
 * Date     : 2018/4/22
 * Project [ RNPlayground ] Coded on WebStorm.
 */


import {
    Dimensions,
    PixelRatio,
} from 'react-native';


export const deviceWidth = Dimensions.get('window').width;      //设备的宽度
export const deviceHeight = Dimensions.get('window').height;    //设备的高度
let fontScale = PixelRatio.getFontScale();                      //返回字体大小缩放比例

let pixelRatio = PixelRatio.get();      //当前设备的像素密度
const defaultPixel = 2;                           //iphone6的像素密度
//px转换成dp
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;
const scale = Math.min(deviceHeight / h2, deviceWidth / w2);   //获取缩放比例


const px2dp = function px2dp(px: number): number {


    return PixelRatio.roundToNearestPixel(px);
}

export default px2dp;

