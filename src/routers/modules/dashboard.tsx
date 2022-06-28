import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// dashboard 模块
const dashboardRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "Dashboard"
		},
		children: [
			{
				path: "/dashboard/dataVisualize",
				element: lazyLoad(React.lazy(() => import("@/views/dashboard/dataVisualize/index"))),
				meta: {
					requiresAuth: true,
					title: "数据可视化",
					key: "dataVisualize"
				}
			},
			{
				path: "/dashboard/embedded",
				element: lazyLoad(React.lazy(() => import("@/views/dashboard/embedded/index"))),
				meta: {
					requiresAuth: true,
					title: "内嵌页面",
					key: "embedded"
				}
			}
		]
	}
];

export default dashboardRouter;
