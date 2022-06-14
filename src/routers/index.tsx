import React from "react";
import { useRoutes, Navigate, RouteObject } from "react-router-dom";
import lazyLoad from "./lazyLoad";

// import NotFound from "@/components/ErrorMessage/404";
// import LayoutIndex from "@/layouts/index";
// import Login from "@/views/login/index";
// import Home from "@/views/home/index";
// import DataScreen from "@/views/dataScreen/index";
// import UseHooks from "@/views/proTable/useHooks/index";
// import UseComponent from "@/views/proTable/useComponent/index";
// import DataVisualize from "@/views/dashboard/dataVisualize";

const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	{
		path: "/login",
		element: lazyLoad(React.lazy(() => import("@/views/login/index")))
	},
	{
		element: lazyLoad(React.lazy(() => import("@/layouts/index"))),
		children: [
			{
				path: "/home",
				element: lazyLoad(React.lazy(() => import("@/views/home/index")))
			},
			{
				path: "/dataScreen",
				element: lazyLoad(React.lazy(() => import("@/views/dataScreen/index")))
			},
			{
				path: "/proTable/useHooks",
				element: lazyLoad(React.lazy(() => import("@/views/proTable/useHooks/index")))
			},
			{
				path: "/proTable/useComponent",
				element: lazyLoad(React.lazy(() => import("@/views/proTable/useComponent/index")))
			},

			{
				path: "/dashboard/dataVisualize",
				element: lazyLoad(React.lazy(() => import("@/views/dashboard/dataVisualize/index")))
			}
		]
	},
	{
		path: "*",
		element: lazyLoad(React.lazy(() => import("@/components/ErrorMessage/404")))
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
