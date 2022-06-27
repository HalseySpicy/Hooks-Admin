import Layout from "@/layouts/index";
import AuthRouter from "@/routers/utils/authRouter";

// 懒加载 Layout
// import React from "react";
// import lazyLoad from "@/routers/util/lazyLoad";
// const Layout = lazyLoad(React.lazy(() => import("@/layouts/index")));

/**
 * @description: default layout
 */
export const LayoutIndex = () => (
	<AuthRouter>
		<Layout />
	</AuthRouter>
);
