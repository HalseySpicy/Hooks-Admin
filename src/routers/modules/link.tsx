import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 外部链接模块
const linkRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "外部链接"
		},
		children: [
			{
				path: "/link/gitee",
				element: lazyLoad(React.lazy(() => import("@/views/link/gitee/index"))),
				meta: {
					requiresAuth: true,
					title: "Gitee 仓库",
					key: "gitee"
				}
			},
			{
				path: "/link/github",
				element: lazyLoad(React.lazy(() => import("@/views/link/github/index"))),
				meta: {
					requiresAuth: true,
					title: "GitHub 仓库",
					key: "github"
				}
			},
			{
				path: "/link/juejin",
				element: lazyLoad(React.lazy(() => import("@/views/link/juejin/index"))),
				meta: {
					requiresAuth: true,
					title: "掘金文档",
					key: "juejin"
				}
			},
			{
				path: "/link/myBlog",
				element: lazyLoad(React.lazy(() => import("@/views/link/myBlog/index"))),
				meta: {
					requiresAuth: true,
					title: "个人博客",
					key: "myBlog"
				}
			}
		]
	}
];

export default linkRouter;
