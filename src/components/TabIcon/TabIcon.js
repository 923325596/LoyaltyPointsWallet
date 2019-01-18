import React from 'react';
import {
  Text, Image, View,StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};
const icons=[Images.Tab.main_n,Images.Tab.class_n,Images.Tab.message_n,Images.Tab.mine_n];
const icons_s=[Images.Tab.main_s,Images.Tab.class_s,Images.Tab.message_s,Images.Tab.mine_s];

const name=["Wallets","Request","Send","Exchange"];
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const TabIcon = (props) => (
    <View style={styles.container}>
        <Image style={{width:px2dp(22),height:px2dp(22),marginTop:5,marginBottom:5}} source={props.focused ?icons_s[props.icon_id]:icons[props.icon_id]}/>

        {props.focused?(<Text style={{color:'#12bad7',fontSize:FONT_SIZE(10),fontWeight:'bold'}}>{name[props.icon_id]}</Text>):(<Text style={{fontSize:10,color:'#A2A2A2'}}>{name[props.icon_id]}</Text>)}
    </View>
);

TabIcon.propTypes = propTypes;

export default TabIcon;
