/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image,SectionList,Button,StyleSheet,Text,TouchableOpacity, View,ScrollView,FlatList} from 'react-native';

type Props = {};
export default class ExchangeRest extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
            todaylist:[
                {id:1,content:"1.14LP",cla:"Euro Exchange",times:'11:24am',dater:'2019.1.23'}
            ], 
        }

    }
    _renderItem = (info) => {        
        var content=''+info.item.content;
        var cla=''+info.item.cla;
        var times=''+info.item.times;
        return <TouchableOpacity 
        style={{flexDirection:'row',height:100,padding:10,backgroundColor:"#ffffff"}}>
            <View style={{marginRight:20}}>
                <Image 
                style={{width:60,height:60,borderRadius:30}}
                source={Images.Img.transaction}></Image>
            </View>
            <View style={styles.Col}>
                <Text style={{fontSize:18,color:'#33383d',lineHeight:19}}>{content}</Text>
                <Text>{cla}</Text>
            </View>
            <View style={styles.Col}>
                <Text style={{textAlign:"right"}}>{times}</Text>
            </View>
        </TouchableOpacity> 
        
      }
     
      _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text
          style={{ height: 30, textAlign:"left", textAlignVertical: 'center',  color: '#8E959E', fontSize: 16 }}>{txt}</Text>
      }
    render() {
        var section = [
            { key: "January 23,2019", 
                data: [{content:"1.34LP",cla:"Euro Exchange",times:'7:24am'}, { content:"1.34LP",cla:"Euro Exchange",times:'7:24am' }, {content:"1.34LP",cla:"Euro Exchange",times:'7:24am' }] },
            { key: "January 22,2019", 
                data: [{content:"1.34LP",cla:"Euro Exchange",times:'7:24am' }, { content:"1.34LP",cla:"Euro Exchange",times:'7:24am' }, { content:"1.34LP",cla:"Euro Exchange",times:'7:24am'}, {content:"1.34LP",cla:"Euro Exchange",times:'7:24am' }, {content:"1.34LP",cla:"Euro Exchange",times:'7:24am'}] },          
          ];

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
                    <View style={styles.Col}>
                        <Text style={{fontSize:16,color:'#2f3236',lineHeight:22}}>weiwei</Text>  
                        <Text>weiwei@gmail.com</Text>                 
                    </View> 
                    <TouchableOpacity style={{borderRadius:3,borderColor:'#6ad9e1',borderWidth:1, width:78,height:30,paddingLeft:10,textAlign:"centre"}}>
                        <Text style={{fontSize:12,lineHeight:22}}>EXCHANGE</Text>                    
                    </TouchableOpacity>
                    
                </View>
                {/*第二行*/}
                <View style={{flexDirection:'row',height:100,padding:20,backgroundColor:'#ffffff'}}>
                    {/* 第一列 */}
                    <View style={styles.Col}>
                        <Text style={{fontSize:20,color:'#33383d',lineHeight:28}}>2.71</Text>
                        <View style={{borderWidth:2, borderColor:'#78aef9',width:22}}></View>
                        <Text style={{fontSize:12,color:'#8e959e',lineHeight:19}}>Today Total</Text>
                    </View>
                    <View style={{borderWidth:1, borderColor:'#eeeeee',height:30,margin:20}}></View>
                    {/* 第二列 */}
                    <View style={styles.Col}>
                        <Text style={{fontSize:20,color:'#33383d',lineHeight:28}}>3.40</Text>
                        <View style={{borderWidth:2, borderColor:'#ffcd47',width:22}}></View>
                        <Text style={{fontSize:12,color:'#8e959e',lineHeight:19}}>This Week Total</Text>
                    </View>
                    {/* 第三列 */}
                    <View style={{borderWidth:1, borderColor:'#eeeeee',height:30,margin:20}}></View>
                    <View style={styles.Col}>
                        <Text style={{fontSize:20,color:'#33383d',lineHeight:28}}>6.56</Text>
                        <View style={{borderWidth:2, borderColor:'#f9504d',width:22}}></View>
                        <Text style={{fontSize:12,color:'#8e959e',lineHeight:19}}>This Month Total</Text>
                    </View>
                </View>
            </View>
            
            {/*第二行*/}            
            <View style={{padding:20}}>
                <SectionList
                renderSectionHeader={this._sectionComp}
                renderItem={this._renderItem}
                sections={section}
                ItemSeparatorComponent={() => <View><Text></Text></View>}
                />
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
    Col:{
        flex:1,
        justifyContent:'center',
        alignItems:'stretch',
        width:100    
        
      }

});
