/**
 * Created by Administrator on 2018/6/8.
 */
/**
 * 调用说明：
 * <Loading ref={r=>{this.Loading = r}} hide = {true} /> //放在布局的最后即可
 * 在需要显示的地方调用this.Loading.show();
 * 在需要隐藏的地方调用this.Loading.close();
 *  @format
 * @flow
 *
 */

import React, { Component } from 'react';
import {
    Platform,
    View,
    ActivityIndicator,
    Modal,
    Text
} from 'react-native';

import PropTypes from 'prop-types';
type Props = {};
export default class Loading extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }

    close() {
        setTimeout(()=>{
            this.setState({modalVisible: false});
        },100)
    }

    show() {
        this.setState({modalVisible: true});
    }

    render() {
        if (!this.state.modalVisible) {
            return null
        }
        return (
            <Modal
                animationType={"none"}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {}}
            >
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.5)', width: 100, height: 100,justifyContent:'center', alignItems: 'center'}}>
                        <ActivityIndicator
                            animating={true}
                            color='white'
                            style={{

                                width: 60,
                                height: 60,
                            }}
                            size="large" />
                        <Text style={{fontSize:FONT_SIZE(14),color:'#fff'}}>加载中...</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

Loading.propTypes = {
    hide: PropTypes.bool.isRequired,
};