// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import "@/styles/reset.less";
import "@/styles/common.less";
import "@/assets/iconfont/iconfont.less";
import "antd/dist/antd.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux";
import App from "@/App";

// react 18 创建（会导致 antd 菜单折叠时闪烁，等待官方修复）
// ReactDOM.createRoot(document.getElementById("root")!).render(
// 	// * react严格模式
// 	// <React.StrictMode>
// 	<Provider store={store}>
// 		<PersistGate persistor={persistor}>
// 			<App />
// 		</PersistGate>
// 	</Provider>
// 	// </React.StrictMode>
// );

// react 17 创建
ReactDOM.render(
	// * react严格模式
	// <React.StrictMode>
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	// </React.StrictMode>,
	document.getElementById("root")
);
