/**
 * Created by MZY on 2019/1/18.
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
import {Container,Content} from 'native-base'
import I18njs from '../../components/I18n/I18forJs'

type Props = {};
export default class Wallets extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      // WalletHeader中展示的数据
      userInfo: {'curentBalance': '22.58', 'income': '72.58', 'expenses': '5.00'},
      // wallet中展示的数据
      list: [{'id': 1, 'name': 'My wallet 1', 'points': 'Loyalty Points', 'lp': '4.35', 'send': '2.23', 'request': '6.12'},
        {'id': 2, 'name': 'My wallet 2', 'points': 'Loyalty Points', 'lp': '3.45', 'send': '2.23', 'request': '6.11'}],
      // 当前选择wallet的索引
      active: 0
    };
  }

    // 高亮当前选中的卡片及更换数据
    debouncePress=(index)=>{
        alert(index)
        this.setState = { 'active': index }
    }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
        {this._renderHreder()}
        {this._renderWallet()}
        {this._renderAddWallet()}
        {this._renderSend()}
        </Content>
      </Container>
    );
  }

   _renderHreder=()=>{
       return (
           <View style={styles.header}>
             <Text style={styles.headerTitle}>{I18njs.t('Wallets.TotalBalance')}</Text>
             <Text style={styles.headerSubtitle}>{this.state.userInfo.curentBalance + 'LP'}</Text>
             <View style={styles.balance}>
               <View style={styles.balanceValue}>
                 <Image style={styles.icon1} source={Images.Img.arrow_down} />
                 <View style={styles.balanceAmount}>
                   <Text style={styles.balanceTitle}>{I18njs.t('Wallets.Request')}</Text>
                   <Text style={styles.balanceSubtitle}>{this.state.userInfo.income + 'LP'}</Text>
                 </View>
               </View>
               <View style={styles.balanceValue}>
                 <Image style={styles.icon1} source={Images.Img.arrow_up} />
                 <View style={styles.balanceAmount}>
                   <Text style={styles.balanceTitle}>{I18njs.t('Wallets.Send')}</Text>
                   <Text style={styles.balanceSubtitle}>{this.state.userInfo.expenses + 'LP'}</Text>
                 </View>
               </View>
             </View>
           </View>
       )
   };

   _renderWallet=()=>{
        return (
            <View style={styles.footerLine1}>
              <Text style={styles.leftText}>{I18njs.t('Wallets.Wallets')}</Text>
              <Text style={styles.rightText}>{I18njs.t('Wallets.AddWallet')}</Text>
            </View>
        )
   };

   _renderAddWallet=()=>{
     return(
       <View>
         <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
           <View style={styles.footerLine2}>
               { this.state.list.map((info, index) => {
                   return (
                       <View>
                           {this.state.active === index ?
                               <View style={styles.footerCard1} onPress={()=>this.debouncePress(index)}>
                                   <Text style={styles.titleCard}>{info.name}</Text>
                                   <Text style={styles.totalAmount}>{info.points}</Text>
                                   <View style={styles.footerSubtitle}>
                                       <Text style={styles.subtitleCard}>{info.lp}LP</Text>
                                       {/*<Text style={styles.subtitleCardSmall}>LP</Text>*/}
                                   </View>
                               </View> :
                               <View style={styles.footerCard2} onPress={this.debouncePress(index)}>
                                   <Text style={styles.titleCard2}>{info.name}</Text>
                                   <Text style={styles.totalAmount2}>{info.points}</Text>
                                   <View style={styles.footerSubtitle2}>
                                       <Text style={styles.subtitleCard2}>{info.lp}LP</Text>
                                       {/*<Text style={styles.subtitleCard2Small}>LP</Text>*/}
                                   </View>
                               </View>}
                       </View>
                   );
               })}
           </View>
         </ScrollView>
       </View>
     )
   };

   _renderSend=()=>{
     return(
         <View>
           <View style={styles.Send}>
             <Text style={styles.SendTitle}>{I18njs.t('Wallets.Send')}</Text>
             <Text style={styles.SendValue}>{this.state.list[0].send}LP</Text>
           </View>
           <View style={styles.Send}>
             <Text style={styles.SendTitle}>{I18njs.t('Wallets.Request')}</Text>
             <Text style={styles.SendValue}>{this.state.list[0].request}LP</Text>
           </View>
         </View>
     )
   };


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    marginTop: px2dp(50),
  },
  // 用户总钱包卡片样式开始
  header: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    margin: px2dp(20),
    borderRadius: px2dp(10),
    padding: px2dp(20),
    marginBottom: px2dp(30),
    shadowColor: '#78AEF9',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  balance: {
    flexDirection: 'row',
    height: px2dp(40),
  },
  balanceValue: {
    flexDirection: 'row',
    flex: 1,
  },
  balanceAmount: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTitle: {
    color: '#8E959D',
    fontSize: 14,
    fontWeight: 'normal',
  },
  headerSubtitle: {
    color: '#7BB0FD',
    fontSize: 32,
    fontWeight: '300',
    marginTop: px2dp(10),
    marginBottom: px2dp(20),
  },
  balanceTitle: {
    color: '#8E959D',
    fontSize: 11,
    fontWeight: 'normal',
    opacity: 0.8,
  },
  balanceSubtitle: {
    color: '#7BB0FD',
    fontSize: 14,
    fontWeight: 'normal',
  },
  icon1: {
    backgroundColor: 'rgba(255,255,255,0.24)',
    width: px2dp(25),
    height: px2dp(25),
    alignItems: 'center',
    justifyContent: 'center',
    margin: px2dp(8),
  },
  // 用户总钱包卡片样式结束

  // 钱包卡片样式开始
  footerLine1: {
    margin: px2dp(20),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  scrollView: {
    height: px2dp(150),
  },
  footerLine2: {
    marginLeft: px2dp(20),
    marginRight: px2dp(20),
    flexDirection: 'row'
  },
  leftText: {
    fontSize: 14,
    color: '#8D959D',
    fontWeight: 'normal'
  },
  rightText: {
    fontSize: 14,
    color: '#78AEF9',
    fontWeight: 'bold'
  },
  footerCard1: {
    width: px2dp(200),
    height: px2dp(120),
    marginRight: px2dp(10),
    backgroundColor: '#78AEF9',
    borderRadius: 6,
    padding: px2dp(20),
    shadowColor: '#78AEF9',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
  },
  footerCard2: {
    width: px2dp(200),
    height: px2dp(120),
    marginRight: px2dp(10),
    backgroundColor: '#EEF3F8',
    borderRadius: 6,
    padding: px2dp(20),
    marginLeft: px2dp(10),
  },
  titleCard: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  totalAmount: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '300',
    marginTop: px2dp(10)
  },
  footerSubtitle: {
    flexDirection: 'row'
  },
  subtitleCard: {
    marginRight: px2dp(10),
    marginTop: px2dp(10),
    fontSize: 24,
    color: '#fff',
    fontWeight: 'normal'
  },
  subtitleCardSmall: {
    marginRight: px2dp(10),
    marginTop: px2dp(10),
    fontSize: 14,
    color: '#fff',
    fontWeight: 'normal'
  },
  titleCard2: {
    fontSize: 16,
    color: '#595F66',
    fontWeight: 'bold'
  },
  totalAmount2: {
    fontSize: 12,
    color: '#595F66',
    fontWeight: '300',
    marginTop: px2dp(10)
  },
  footerSubtitle2: {
    flexDirection: 'row'
  },
  subtitleCard2: {
    marginRight: px2dp(10),
    marginTop: px2dp(10),
    fontSize: 24,
    color: '#8D959D',
    fontWeight: 'normal'
  },
  subtitleCard2Small: {
    marginRight: px2dp(10),
    marginTop: px2dp(10),
    fontSize: 14,
    color: '#8D959D',
    fontWeight: 'normal'
  },
  // 钱包卡片样式结束

  // 钱包详细信息样式开始
  Send: {
    margin: px2dp(20),
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: px2dp(21),
    borderColor: '#CED4DA',
  },
  SendTitle: {
    marginLeft: px2dp(10),
    fontSize: 14,
    color: '#596067',
    fontWeight: 'normal'
  },
  SendValue: {
    fontSize: 14,
    color: '#596067',
    fontWeight: 'normal'
  }
  // 钱包详细信息样式结束
});

