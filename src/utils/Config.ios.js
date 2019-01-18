/**
 * Created by aj on 2016/12/18.
 */
import {
    View, StyleSheet, ListView, Image, TouchableOpacity, BackAndroid, PixelRatio, Platform, StatusBar,
    Dimensions
} from "react-native";


const {width, height} = Dimensions.get('window');
const isiPhoneX = width == 375 && height == 812 ? true : false;


export default class Config{
     static versionName="V2.0.0";
     static version=200;

}


