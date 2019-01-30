/**
 * Created by Administrator on 2019/1/18.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Icon, Button, FormLogin} from '../../components/Bucks/index';
import I18njs from "../../components/I18n/I18forJs";
type Props = {};
export default class Request extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                {/*//二维码大方块*/}
                <View style={styles.fangkuai}>
                    <View style={styles.fangkuaitou}>
                        <Image style={styles.fangkuaitou1} source={Images.Img.Purse} />
                        <Text style={styles.fangkuaitou2}>{I18njs.t('Request.qr')}</Text>
                        <Text style={styles.fangkuaitou3}>{I18njs.t('Request.code')}</Text>
                    </View>
                    <View style={styles.fnagkuai4}>
                        <Text>{I18njs.t('Request.wait')}...</Text>
                    </View>
                    <View style={styles.fnagkuai5}>
                        <Image style={styles.fnagkuai6} source={Images.Img.Purse} />
                    </View>
                    <View style={styles.fnagkuai7}>
                        <Text style={styles.fnagkuai9}>{I18njs.t('Request.set')}</Text>
                        <Text style={styles.fnagkuai8}>|</Text>
                        <Text style={styles.fnagkuai9}>{I18njs.t('Request.preseve')}</Text>
                    </View>
                </View>
                {/*第二部分*/}
                <View style={styles.dierbu}>
                    <Image style={styles.dierbu2} source={Images.Img.number} />
                    <Text style={styles.dierbu1}>{I18njs.t('Request.id')}</Text>
                </View>
                {/*第三部分*/}
                <View style={styles.disanbu}>
                    <Text style={styles.disanbu1}> 4HK34H3H34H2HH23H4</Text>
                    <View style={styles.disanbu2}>
                        <Button
                            buttonStyle={styles.disanbu3}
                            title={I18njs.t('Request.copy')}
                        />
                        <Button
                            buttonStyle={styles.disanbu4}
                            title={I18njs.t('Request.share')}
                        />
                        <Image style={styles.disanbu5} source={Images.Img.copy} />
                        <Image style={styles.disanbu6} source={Images.Img.share} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#78AEF9',
    },
    fangkuai:{
        width:340,
        height:339,
        backgroundColor: '#FFFFFF',
        borderRadius:5,
    },
    fangkuaitou:{
        width:340,
        height:48,
        paddingTop: px2dp(15),
        backgroundColor: '#F9F9F9',
        textAlign: 'left',
        flexDirection: 'row',
        color:'#5B6069',
    },
    fangkuaitou1:{
        marginLeft: px2dp(10),
        marginTop:px2dp(3),
        fontSize:13,
        width: 13,
        height: 13,
    },
    fangkuaitou2:{
        color:'#5B6069',
        marginLeft: px2dp(10),
        fontSize: 16,
    },
    fangkuaitou3:{
        color:'#5B6069',
        marginLeft: px2dp(10),
        fontSize: 16,
    },
    fnagkuai4:{
        height:40,
        width:340,
        fontSize:14,
        paddingTop: px2dp(16),
        justifyContent: 'center',
        alignItems: 'center',
        color:'#5B6069',
    },
    fnagkuai5:{
        width:340,
        height:176,
        marginTop:px2dp(13),
        justifyContent: 'center',
        alignItems: 'center',
    },
    fnagkuai6:{
        width:179,
        height:176,
        backgroundColor: '#CED4DA',
        fontSize:17,
    },
    fnagkuai7:{
        flexDirection: 'row',
        marginTop: px2dp(20),
        fontSize:14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fnagkuai8:{
      marginLeft:  px2dp(18),
      marginRight:  px2dp(18),
      color:'#EEEEEE',
    },
    fnagkuai9:{
        color:'#78AEF9',
    },
    dierbu:{
        width:375,
        height:48,
        backgroundColor: '#6EA5F1',
        marginTop: px2dp(18),
        paddingLeft:px2dp(25),
        paddingTop:px2dp(15),
        flexDirection: 'row',
    },
    dierbu1:{
        marginLeft:px2dp(10),
        color:'#FFFFFF',
        fontSize:16,
    },
    dierbu2:{
        marginLeft: px2dp(5),
        fontSize:10,
        width:17,
        height:14,
    },
    disanbu:{
        marginTop: px2dp(1),
        width:375,
        height:156,
        backgroundColor: '#6EA5F1',
        alignItems: 'center',
    },
    disanbu1:{
      fontSize:18,
      color:'#FFFFFF',
      paddingTop:px2dp(25),
    },
    disanbu2:{
        marginTop:px2dp(25),
        width:375,
        flexDirection: 'row',
        position:'relative',
    },
    disanbu3:{
        width:151,
        height:34,
        fontSize:11,
        borderColor:'#FFFFFF',
        marginLeft:px2dp(16),
        borderStyle: 'solid',
        borderWidth: 1,
    },
    disanbu4:{
        width:151,
        height:34,
        fontSize:11,
        borderColor:'#FFFFFF',
        marginLeft:px2dp(-19),
        borderStyle: 'solid',
        borderWidth: 1,
    },
    disanbu5:{
        fontSize:13,
        width: 20,
        height: 20,
        position:'absolute',
        top:px2dp(6),
        left:px2dp(53),
    },
    disanbu6:{
        fontSize:13,
        width: 20,
        height: 20,
        position:'absolute',
        top:px2dp(6),
        left:px2dp(215),
    }
});