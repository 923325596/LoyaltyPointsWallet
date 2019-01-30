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
import {StyleSheet, Text, View, ScrollView, Image, SectionList,} from 'react-native';
import I18njs from "../../components/I18n/I18forJs";
import {Button} from "../../components/Bucks";

type Props = {};
export default class Request extends Component<Props> {


  _renderItem = (info) => {
    var txt1='  ' + info.item.key;
    var txt2= '  ' + info.item.data;
    var txt3='  ' + info.item.time;
    return(
        <View style={styles.huadong1}>
          <Image style={styles.sillcard2} source={Images.Img.weiwei} />
          <View style={styles.sillcard5}>
            <Text style={styles.sillcard3}>{txt1}</Text>
            <Text style={styles.sillcard4}>{txt2}</Text>
          </View>
          <Text style={styles.sillcard6}>{txt3}</Text>
        </View>
    )
  }

  render() {
      var sections = [
        { data:[
            {key: "Chris", data:"Send you 2.34LP",time:"7:24am"},
            { key: "Kylan", data:"Send you 1.92LP",time:"7:24am" },
            { key: "Scott Morgan", data:"Send you 1.29LP",time:"7:24am" },
            { key: "Willam Swanson", data:"Send you 1.34LP",time:"7:24am" },
            ] },
       ];
    return (
        <View style={styles.container}>
          {/*卡片*/}
          <View style={styles.card1}>
            <Text style={styles.card2}>{I18njs.t('cardWallet1.walletone')}</Text>
            <Text style={styles.card3}>4.35
              <Text style={styles.card4}>LP</Text>
            </Text>
            <View style={styles.card5}>
              <Button
                  buttonStyle={styles.card6}
                  title={I18njs.t('cardWallet1.wallettwo')}
              />
              <Button
                  buttonStyle={styles.card7}
                  title={I18njs.t('cardWallet1.walletthere')}
              />
            </View>
          </View>
          {/*第二部分*/}
          <View>
            <Text style={styles.sillcard1}>Oct24,2018</Text>
            <View style={styles.sillcard}>
              <Image style={styles.sillcard2} source={Images.Img.weiwei} />
              <View style={styles.sillcard5}>
                <Text style={styles.sillcard3}>Chris</Text>
                <Text style={styles.sillcard4}>Send you 2.34LP</Text>
              </View>
              <Text style={styles.sillcard6}>7:24am </Text>
            </View>
          </View>
            {/*第三*/}
            <View>
              <Text style={styles.list1}>Oct23,2018</Text>
            </View>
            <View style={styles.huadong}>
              <SectionList
                  renderItem={this._renderItem}
                  sections={sections}
              />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  card1:{
    width:327,
    height:176,
    marginTop: px2dp(5),
    backgroundColor: '#78AEF9',
    borderRadius:5,
  },
  card2:{
    fontSize:14,
    color:'#FFFFFF',
    marginLeft:px2dp(34),
    marginTop: px2dp(26),
  },
  card3:{
    fontSize:24,
    color:'#FFFFFF',
    marginLeft:px2dp(34),
    marginTop: px2dp(8),
  },
  card4:{
    fontSize:14,
    color:'#FFFFFF'
  },
  card5:{
    marginTop: px2dp(27),
    flexDirection: 'row',
  },
  card6:{
    width: 90,
    height: 34,
    marginLeft:px2dp(20),
    paddingLeft: px2dp(-20),
    backgroundColor:'#9dc4f8',
    fontSize:11,
  },
  card7:{
    width: 90,
    height: 34,
    backgroundColor:'#9dc4f8',
    paddingLeft: px2dp(-20),
    fontSize:11,
  },
  sillcard1:{
    marginLeft: px2dp(-4),
    marginTop: px2dp(27),
    fontSize:12,
    color:'#8E959E',
  },
  sillcard:{
    width: 327,
    height: 64,
    marginLeft: px2dp(-5),
    marginTop: px2dp(12),
    flexDirection:'row',
    backgroundColor:'#FFFFFF',
    textAlign:'center',
    alignItems:'center',
    position:'relative',
  },
  sillcard2:{
    marginLeft: px2dp(12),
    width: 28,
    height: 28,
    borderRadius:5,
  },
  sillcard5:{
    flexDirection:'column',
    marginLeft: px2dp(8),
  },
  sillcard3:{
    fontSize:14,
    color:'#5A6068',
  },
  sillcard4:{
    fontSize:10,
    color:'#8F96A0',
  },
  sillcard6:{
    fontSize:10,
    color:'#8F96A0',
    position:'absolute',
    top:px2dp(25),
    right:px2dp(45),
  },
  list1:{
    marginLeft: px2dp(-5),
    marginTop: px2dp(16),
    fontSize:12,
    textAlign:'left',
    color:'#8E959E',
    width:320,
  },
  huadong:{
    width:320,
    height:256,
    backgroundColor:'#8F96A0',
    marginTop: px2dp(12),
  },
  huadong1:{
    width: 320,
    height: 64,
    marginBottom: px2dp(0.2),
    flexDirection:'row',
    backgroundColor:'#FFFFFF',
    textAlign:'center',
    alignItems:'center',
  },
});