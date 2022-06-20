import ReactDOM from "react-dom/client";
import "@/styles/reset.less";
import "@/styles/common.less";
import "antd/dist/antd.css";
import App from "@/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	// * react严格模式
	// <React.StrictMode>
	<App />
	// </React.StrictMode>
);
