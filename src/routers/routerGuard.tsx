import { useEffect } from "react";
import guard from "@/routers/util/guard";
import { RouteObject } from "@/routers/interface";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";

export const RouterGuard = ({ routes }: { routes: RouteObject[] }) => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		// * 当以下三个参数改变时就执行 路由拦截 方法
		guard(location, navigate, routes);
	}, [location, navigate, routes]);

	const Router = useRoutes(routes);

	return Router;
};
