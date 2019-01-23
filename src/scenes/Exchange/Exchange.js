/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Exchange2 extends Component<Props> {

    render() {
        return (
            <View >
            <View style={styles.container}>
                <Text style={{fontSize:FONT_SIZE(20),color:Color.Tabtext}}>Exchange11</Text>
                <Text onPress={Actions.login} style={{fontSize:FONT_SIZE(20),color:Color.Tabtext,marginTop:px2dp(20)}}>点我去登录</Text>
            </View>
            
            {/*第一块*/}
            <View style={{padding:20,backgroundColor:'#ffffff',margin:0}}> 
                {/*第一行*/}
                <View style={{flexDirection:'row',height:100,marginBottom:20}}>         
                    <View style={{marginRight:20}}>
                        <Image 
                        style={{width:80,height:80,borderRadius:40}}
                        source={require("../imgs/toux.png")}></Image>                    
                    </View>
                    <View style={myStyles.myCol}>
                        <Text style={{fontSize:16,color:'#2f3236',lineHeight:22}}>weiwei</Text>  
                        <Text>weiwei@gmail.com</Text>                 
                    </View> 
                    <TouchableOpacity style={{borderRadius:3,borderColor:'#6ad9e1',borderWidth:1, width:78,height:30,paddingLeft:10}}>
                        <Text style={{fontSize:12,lineHeight:22}}>切换用户</Text>                    
                    </TouchableOpacity>
                    
                </View>
                {/*第二行*/}
                <View style={{flexDirection:'row',height:100,padding:20,backgroundColor:'#ffffff'}}>
                    {/* 第一列 */}
                    <View style={myStyles.myCol}>
                        <Text style={{fontSize:20,color:'#33383d',lineHeight:28}}>2.71</Text>
                        <View style={{borderWidth:2, borderColor:'#78aef9',width:22}}></View>
                        <Text>当日总计</Text>
                    </View>
                    <View style={{borderWidth:1, borderColor:'#eeeeee',height:30,margin:20}}></View>
                    {/* 第二列 */}
                    <View style={myStyles.myCol}>
                        <Text style={{fontSize:20,color:'#33383d',lineHeight:28}}>3.40</Text>
                        <View style={{borderWidth:2, borderColor:'#ffcd47',width:22}}></View>
                        <Text>本周总计</Text>
                    </View>
                    {/* 第三列 */}
                    <View style={{borderWidth:1, borderColor:'#eeeeee',height:30,margin:20}}></View>
                    <View style={myStyles.myCol}>
                        <Text style={{fontSize:20,color:'#33383d',lineHeight:28}}>6.56</Text>
                        <View style={{borderWidth:2, borderColor:'#f9504d',width:22}}></View>
                        <Text>当月总计</Text>
                    </View>
                </View>
            </View>
            
            {/*第三行*/}
            <View style={{padding:20}}>
                <View style={{flexDirection:'row',margin:20}}>
                        <Text style={{fontSize:12,lineHeight:19,width:65,height:19}}>{this.state.todaylist[0].dater}</Text>
                    </View>
                <View style={{flexDirection:'row',borderWidth:1, borderColor:'white',borderRadius:4,backgroundColor:'#ffffff'}}>                
                    <FlatList
                    renderItem={this.showItem}
                    data={this.state.todaylist}
                    ></FlatList>
                </View>
            </View>
            {/*第四行*/}
            <View style={{padding:20}}>
                    <View style={{flexDirection:'row',margin:20}}>
                        <Text style={{fontSize:12,lineHeight:19,width:65,height:19}}>{this.state.yesterdaylist[0].dater}</Text>
                    </View>
                
                <View style={{flexDirection:'row',borderWidth:1, borderColor:'white',borderRadius:4,backgroundColor:'#ffffff'}}>                
                    <FlatList
                    renderItem={this.showItem}
                    
                    data={this.state.yesterdaylist}
                    ></FlatList>
                </View>
            </View>            
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

