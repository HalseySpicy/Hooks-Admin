import { useState, useEffect } from "react";
import { getBrowserLang } from "@/utils/util";
import { ConfigProvider } from "antd";
import { connect } from "react-redux";
import { setWeakOrGray } from "@/redux/modules/global/action";
import { HashRouter } from "react-router-dom";
import AuthRouter from "@/routers/utils/authRouter";
import Router from "@/routers/index";
import useTheme from "@/hooks/useTheme";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import "moment/dist/locale/zh-cn";

const App = (props: any) => {
	const [i18nLocale, setI18nLocale] = useState(zhCN);

	useTheme(props);

	const setLanguage = () => {
		// 如果 redux 中有默认语言就设置成 redux 的默认语言，没有默认语言就设置成浏览器默认语言
		if (props.language && props.language == "zh") return setI18nLocale(zhCN);
		if (props.language && props.language == "en") return setI18nLocale(enUS);
		if (getBrowserLang() == "zh") return setI18nLocale(zhCN);
		if (getBrowserLang() == "en") return setI18nLocale(enUS);
	};

	useEffect(() => {
		setLanguage();
	}, [props.language]);

	return (
		<HashRouter>
			<ConfigProvider locale={i18nLocale} componentSize={props.assemblySize}>
				<AuthRouter>
					<Router />
				</AuthRouter>
			</ConfigProvider>
		</HashRouter>
	);
};

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setWeakOrGray };
export default connect(mapStateToProps, mapDispatchToProps)(App);
