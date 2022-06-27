import i18n from "i18next";
import enUsTrans from "./modules/en";
import zhCnTrans from "./modules/zh";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: enUsTrans
		},
		zh: {
			translation: zhCnTrans
		}
	},
	// 选择默认语言，选择内容为上述配置中的 key，即 en/zh
	fallbackLng: "zh",
	debug: false,
	interpolation: {
		escapeValue: false // not needed for react as it escapes by default
	}
});

export default i18n;
