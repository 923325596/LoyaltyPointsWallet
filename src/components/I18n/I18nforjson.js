/**
 * Created by Administrator on 2019/1/22.
 */
import I18n from 'react-native-i18n';

I18n.defaultLocale='zh';  //默认语言  目前是汉语
I18n.fallbacks = true;
I18n.translations = {
    'en': require('./en'),         //英语
    'de': require('./de'),         //德语
    'zh': require('./zh'),         //汉语
};


export  default I18n;