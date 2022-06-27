import { ConfigProvider } from "antd";
import { connect } from "react-redux";
import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";
import zhCN from "antd/lib/locale/zh_CN";
// import enUS from "antd/lib/locale/en_US";
import "moment/dist/locale/zh-cn";

const App = (props: any) => {
	return (
		<HashRouter>
			<ConfigProvider locale={zhCN} componentSize={props.assemblySize}>
				<Router />
			</ConfigProvider>
		</HashRouter>
	);
};

const mapStateToProps = (state: any) => state.global;
export default connect(mapStateToProps)(App);
