import { useRoutes, Navigate, RouteObject } from "react-router-dom";

import NotFound from "@/components/ErrorMessage/404";
import LayoutIndex from "@/layouts/index";
import Login from "@/views/login/index";
import Home from "@/views/home/index";

const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		element: <LayoutIndex name="我是参数" />,
		children: [
			{
				path: "/home",
				element: <Home />
			}
		]
	},
	{
		path: "*",
		element: <NotFound />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
