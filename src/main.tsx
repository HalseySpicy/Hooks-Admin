// import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "@/styles/reset.scss";
import "@/styles/common.scss";
import "antd/dist/antd.css";
import App from "@/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	// * react严格模式
	// <React.StrictMode>
	<App />
	// </React.StrictMode>
);
