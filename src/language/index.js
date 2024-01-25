import { createI18n } from 'vue-i18n'; //引入vue-i18n组件
import zhCN from './zh_CN.js' // 导入中文语言包
import enUS from './en_US.js' // 导入英文语言包

//注册i18n实例并引入语言文件
const i18n = createI18n({
    legacy: false,
    locale: 'zhCN', // 语言标识（缓存里面没有就用中文）
    fallbackLocale:'zhCN' , //没有英文的时候默认中文语言
    messages: {
        zhCN,
        enUS
    }
});

export default i18n;