/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image,SectionList,StyleSheet,Text,TouchableOpacity, View,ScrollView} from 'react-native';
import I18njs from "../../components/I18n/I18forJs";

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
        style={styles.list}>
            <View style={styles.imgview}>
                <Image 
                style={styles.imglist}
                source={Images.Img.transaction}></Image>
            </View>
            <View style={styles.Col}>
                <Text style={styles.contentext}>{content}<Text>{I18njs.t('exchangerest.LP')}</Text></Text>
                <Text>{I18njs.t('exchangerest.cla')}</Text>
            </View>
            <View style={styles.Col}>
                <Text style={{textAlign:"right"}}>{times}</Text>
            </View>
        </TouchableOpacity> 
      }
      _sectionComp = (info) => {
        var txt = info.section.key;
        return <View style={{flexDirection:"row",margin:15}}>
            <Text style={styles.towtext}>{txt}</Text>
          </View>
      }
    render() {
        var section = [
            { key: "January 23,2019", 
                data: [{content:"1.34",cla:"Euro Exchange",times:'7:24am'}, { content:"1.34",cla:"Euro Exchange",times:'7:24am' }, {content:"1.34",cla:"Euro Exchange",times:'7:24am' }] },
            { key: "January 22,2019", 
                data: [{content:"1.34",cla:"Euro Exchange",times:'7:24am' }, { content:"1.34",cla:"Euro Exchange",times:'7:24am' }, { content:"1.34",cla:"Euro Exchange",times:'7:24am'}, {content:"1.34",cla:"Euro Exchange",times:'7:24am' }, {content:"1.34",cla:"Euro Exchange",times:'7:24am'}] },          
          ];

        return (            
            <View>
            <ScrollView >
            {/*第一块*/}
            <View style={styles.chunk}> 
                {/*第一行*/}
                <View style={styles.row}>
                    <View style={styles.imgview}>
                        <Image 
                        style={styles.chunkimg}
                        source={Images.Img.weiwei}></Image>
                    </View>
                    <View style={styles.Col}>
                        <View style={{height:22}}>
                            <Text style={styles.nametext}>{I18njs.t('exchangerest.names')}</Text>
                        </View>
                        <View style={styles.mail}>
                            <Text style={styles.mailtext}>roxieshelton@gmail.com</Text>
                        </View>
                    </View>
                    <View style={{textAlign:"rigth",marginTop:37}}>
                        <TouchableOpacity 
                        style={styles.butborder}
                        onPress={()=>{Actions.exchange}}
                        >
                            <Text style={styles.buttext}>{I18njs.t('exchangerest.but')}</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                {/*第二行*/}
                <View style={styles.row}>
                    {/* 第一列 */}
                    <View style={styles.Col}>
                        <View>
                            <Text style={styles.onetext}>2.71</Text>
                            <View style={styles.blueline}></View>
                            <View style={{height:19,width:69}}>
                                <Text style={styles.towtext}>{I18njs.t('exchangerest.today')}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.verline}></View>
                    {/* 第二列 */}
                    <View style={styles.Col}>
                        <View>
                            <Text style={styles.onetext}>3.40</Text>
                            <View style={styles.yellowline}></View>
                            <View style={{height:19,width:91}}>
                                <Text style={styles.towtext}>{I18njs.t('exchangerest.week')}</Text>
                            </View>
                        </View>
                    </View>
                    {/* 第三列 */}
                    <View style={styles.verline}></View>
                    <View style={styles.Col}>
                        <View>
                            <Text style={styles.onetext}>6.56</Text>
                            <View style={styles.redline}></View>
                            <View style={{height:19,width:97}}>
                                <Text style={styles.towtext}>{I18njs.t('exchangerest.month')}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            
            {/*第二行*/}            
            <View>
                <SectionList
                renderSectionHeader={this._sectionComp}
                renderItem={this._renderItem}
                sections={section}
                style={styles.sectilist}
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
    chunk:{flex:1,padding:20,backgroundColor:'#ffffff',margin:0},
    imgview:{marginRight:20,justifyContent: 'center',alignItems: 'center'},
    chunkimg:{width:54,height:54,borderRadius:27},
    nametext:{fontSize:16,color:'#2f3263',lineHeight:22},
    mail:{width:135,height:17},
    mailtext:{fontSize:12,color:'#8e959d',lineHeight:17},
    butborder:{width:78,height:30,borderWidth:1,borderColor:"#6ad9e1",borderRadius:3},
    buttext:{fontSize:12,lineHeight:30,color:"#6ad9e1",textAlign:"center"},
    row:{flexDirection:'row',height:100},
    Col:{flex:1,justifyContent:'center',alignItems:'stretch'},
    blueline:{borderWidth:2, borderColor:'blue',width:22},
    yellowline:{borderWidth:2, borderColor:'yellow',width:22},
    redline:{borderWidth:2, borderColor:'red',width:22},
    verline:{borderWidth:1, borderColor:'#eeeeee',height:30,marginTop:30,marginRight:15},
    onetext:{fontSize:20,color:'#33383d',lineHeight:28},
    towtext:{fontSize:12,color:'#8e959e',lineHeight:19},  
    list:{flexDirection:'row',height:64,padding:10,backgroundColor:"#ffffff",borderWidth:1, borderColor:'white',borderRadius:5}, 
    sectilist:{margin:20,}, 
    keytext:{ height: 30, textAlign:"left", textAlignVertical: 'center',  color: '#8E959E', fontSize: 16 },
    contentext:{fontSize:18,color:'#33383d',lineHeight:19},
    imglist:{width:32,height:32,borderRadius:16},

    

});
