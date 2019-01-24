/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image,FlatList,Button,StyleSheet,Text,TouchableOpacity, View,ScrollView} from 'react-native';

type Props = {};
export default class ExchangeRest extends Component<Props> {
    constructor(){
        super();
        this.state={
            todaylist:[
                {id:1,content:"1.14LP",cla:"Euro Exchange",times:'11:24am',dater:'2019.1.23'}
            ],
            yesterdaylist:[
                {id:1,content:"1.34LP",cla:"Euro Exchange",times:'7:24am',dater:'2019.1.22'},
                {id:2,content:"1.66LP",cla:"Euro Exchange",times:'8:40am',dater:'2019.1.22'},
                {id:3,content:"1.28LP",cla:"Euro Exchange",times:'8:40am',dater:'2019.1.22'},
               
            ]
        }

    }
    showItem=(info)=>{
        return <TouchableOpacity 
            style={{flexDirection:'row',height:100,padding:10}}>
                <View style={{marginRight:20}}>
                    <Image 
                    style={{width:60,height:60,borderRadius:30}}
                    source={Images.Img.transaction}></Image>
                </View>
                <View style={myStyles.myCol}>
                    <Text style={{fontSize:18,color:'#33383d',lineHeight:19}}>{info.item.content}</Text>
                    <Text>{info.item.cla}</Text>
                </View>
                <View style={myStyles.myCol}>
                    <Text>{info.item.times}</Text>
                </View>
            </TouchableOpacity>       
      }     

    render() {
        return (            
            <View>
            <ScrollView >
            {/*第一块*/}
            <View style={{padding:20,backgroundColor:'#ffffff',margin:0}}> 
                {/*第一行*/}
                <View style={{flexDirection:'row',height:100,marginBottom:10}}>         
                    <View style={{marginRight:20}}>
                        <Image 
                        style={{width:80,height:80,borderRadius:40}}
                        source={Images.Img.weiwei}></Image>                    
                    </View>
                    <View style={myStyles.myCol}>
                        <Text style={{fontSize:16,color:'#2f3236',lineHeight:22}}>weiwei</Text>  
                        <Text>weiwei@gmail.com</Text>                 
                    </View> 
                    <TouchableOpacity
                    onPress={Actions.exchangepages}
                     style={{borderRadius:3,borderColor:'#6ad9e1',borderWidth:1, width:78,height:30,paddingLeft:10}}>
                        <Text style={{fontSize:12,lineHeight:22}}>EXCHANGE</Text>                    
                    </TouchableOpacity>
                    
                </View>
                {/*第二行*/}
                <View style={{flexDirection:'row',height:100,padding:20,backgroundColor:'#ffffff'}}>
                    {/* 第一列 */}
                    <View style={myStyles.myCol}>
                        <Text style={{fontSize:20,color:'#33383d',lineHeight:28}}>2.71</Text>
                        <View style={{borderWidth:2, borderColor:'#78aef9',width:22}}></View>
                        <Text>Today Total</Text>
                    </View>
                    <View style={{borderWidth:1, borderColor:'#eeeeee',height:30,margin:20}}></View>
                    {/* 第二列 */}
                    <View style={myStyles.myCol}>
                        <Text style={{fontSize:20,color:'#33383d',lineHeight:28}}>3.40</Text>
                        <View style={{borderWidth:2, borderColor:'#ffcd47',width:22}}></View>
                        <Text>This Week Total</Text>
                    </View>
                    {/* 第三列 */}
                    <View style={{borderWidth:1, borderColor:'#eeeeee',height:30,margin:20}}></View>
                    <View style={myStyles.myCol}>
                        <Text style={{fontSize:20,color:'#33383d',lineHeight:28}}>6.56</Text>
                        <View style={{borderWidth:2, borderColor:'#f9504d',width:22}}></View>
                        <Text>This Month Total</Text>
                    </View>
                </View>
            </View>
            
            {/*第二行*/}
            <View style={{padding:20}}>
                <View style={{flexDirection:'row',margin:10}}>
                        <Text style={{fontSize:12,lineHeight:19,width:65,height:19}}>{this.state.todaylist[0].dater}</Text>
                    </View>
                <View style={{flexDirection:'row',borderWidth:1, borderColor:'white',borderRadius:4,backgroundColor:'#ffffff'}}>                
                    <FlatList
                    renderItem={this.showItem}
                    data={this.state.todaylist}
                    ></FlatList>
                </View>
            </View>
            {/*第三行*/}
            <View style={{padding:20}}>
                    <View style={{flexDirection:'row',margin:10}}>
                        <Text style={{fontSize:12,lineHeight:19,width:65,height:19}}>{this.state.yesterdaylist[0].dater}</Text>
                    </View>
                
                <View style={{flexDirection:'row',borderWidth:1, borderColor:'white',borderRadius:4,backgroundColor:'#ffffff'}}>                
                    <FlatList
                    renderItem={this.showItem}
                    
                    data={this.state.yesterdaylist}
                    ></FlatList>
                </View>
            </View>  
            </ScrollView>           
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
var myStyles = StyleSheet.create({
    myCol:{
      flex:1,
      justifyContent:'center',
      alignItems:'stretch',     
      
    }
  })
