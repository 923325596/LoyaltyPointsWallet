/**
 * Created by Administrator on 2019/1/18.
 */
/**
 * Created by Administrator on 2018/9/19.
 */
/**
 * Created by Administrator on 2018/9/14.
 */


import {observable, computed, action, runInAction, autorun} from 'mobx'


class Theme {
    @observable bgcolor = '#fff';   //默认值可以选择默认颜色



    @action
    setBGColor = (bgcolor) => {
        this.bgcolor = bgcolor;
    };


    @action
    setTheme= (info) => {
       //可以通过网络请求控制主题颜色
    };

}

const ThemeMobx = new Theme();
export default ThemeMobx;