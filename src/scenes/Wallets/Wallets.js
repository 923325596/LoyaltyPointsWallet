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
import {WalletHeader, Icon} from '../../components/Bucks/index'

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
      active: 0,
    };
  }

  debouncePress() {
    // this.state.active = index
    alert('1')
    // this.setState()
  }

    _renderHeader=()=>{
        return (
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Total Balance</Text>
              <Text style={styles.headerSubtitle}>{this.state.userInfo.curentBalance + 'LP'}</Text>
              <View style={styles.balance}>
                <View style={styles.balanceValue}>
                  <Image style={styles.icon1} source={Images.Img.icon_vasi} />
                  <View style={styles.balanceAmount}>
                    <Text style={styles.balanceTitle}>Request</Text>
                    <Text style={styles.balanceSubtitle}>{this.state.userInfo.income + 'LP'}</Text>
                  </View>
                </View>
                <View style={styles.balanceValue}>
                  <Image style={styles.icon1} source={Images.Img.icon_paypal} />
                  <View style={styles.balanceAmount}>
                    <Text style={styles.balanceTitle}>Send</Text>
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
              <Text style={styles.leftText}>Wallets</Text>
              <Text style={styles.rightText}>Add Wallet</Text>
            </View>
        )
    };

    _renderAddWallet=()=>{
        return(
            <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.footerLine2}>
                  { this.state.list.map((info, index) => {
                      return (
                          <View>
                              {this.state.active === index ?
                                  <View style={styles.footerCard1} onPress={this.debouncePress}>
                                    <Text style={styles.titleCard}>{info.name}</Text>
                                    <Text style={styles.totalAmount}>{info.points}</Text>
                                    <View style={styles.footerSubtitle}>
                                      <Text style={styles.subtitleCard}>{info.lp}LP</Text>
                                        {/*<Text style={styles.subtitleCardSmall}>LP</Text>*/}
                                    </View>
                                  </View> :
                                  <View style={styles.footerCard2} onPress={this.debouncePress}>
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
        )
    };

    _renderSend=()=>{
        return(
            <View>
              <View style={styles.Send}>
                <Text style={styles.SendTitle}>Send</Text>
                <Text style={styles.SendValue}>{this.state.list[0].send}LP</Text>
              </View>
              <View style={styles.Send}>
                <Text style={styles.SendTitle}>Request</Text>
                <Text style={styles.SendValue}>{this.state.list[0].request}LP</Text>
              </View>
            </View>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                {this._renderHeader()}
                {this._renderWallet()}
                {this._renderAddWallet()}
                {this._renderSend()}
            </View>
        );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    marginTop: 50,
  },
  // 用户总钱包卡片样式开始
  header: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#78AEF9',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  balance: {
    flexDirection: 'row',
    height: 40,
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
    marginTop: 10,
    marginBottom: 20,
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
    borderRadius: 22,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  // 用户总钱包卡片样式结束

  // 钱包卡片样式开始
  footerLine1: {
    margin: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  scrollView: {
    height: 100,
  },
  footerLine2: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    paddingBottom: 50,
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
    width: 180,
    height: 110,
    marginRight: 10,
    backgroundColor: '#78AEF9',
    borderRadius: 6,
    padding: 20,
    shadowColor: '#78AEF9',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
  },
  footerCard2: {
    width: 180,
    height: 110,
    marginRight: 10,
    backgroundColor: '#EEF3F8',
    borderRadius: 6,
    padding: 20,
    marginLeft: 10,
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
    marginRight: 10,
    marginTop: 10,
    fontSize: 24,
    color: '#fff',
    fontWeight: 'normal'
  },
  subtitleCardSmall: {
    marginRight: 10,
    marginTop: 10,
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
    marginTop: 10
  },
  footerSubtitle2: {
    flexDirection: 'row'
  },
  subtitleCard2: {
    marginRight: 10,
    marginTop: 10,
    fontSize: 24,
    color: '#8D959D',
    fontWeight: 'normal'
  },
  subtitleCard2Small: {
    marginRight: 10,
    marginTop: 10,
    fontSize: 14,
    color: '#8D959D',
    fontWeight: 'normal'
  },
  // 钱包卡片样式结束

  // 钱包详细信息样式开始
  Send: {
    margin: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 21,
    borderColor: '#CED4DA',
  },
  SendTitle: {
    fontSize: 14,
    color: '#8D959D',
    fontWeight: 'normal'
  },
  SendValue: {
    fontSize: 14,
    color: '#8D959D',
    fontWeight: 'normal'
  }
  // 钱包详细信息样式结束
});

