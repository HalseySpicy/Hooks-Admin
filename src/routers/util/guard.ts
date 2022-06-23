import { NavigateFunction, Location } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import { searchRoute } from "@/utils/util";
import { store } from "@/redux/index";
import { HOME_URL } from "@/config/config";

/**
 * @description 全局路由守卫函数
 * */
const guard = (location: Location, navigate: NavigateFunction, routes: RouteObject[]) => {
	const { pathname } = location;
	const route = searchRoute(pathname, routes);

	// * 判断当前路由是否需要访问权限(不需要权限直接放行)
	if (!route.meta?.requiresAuth) return;

	// * 判断是否有Token
	const token = store.getState().global.token;
	if (!token) return navigate("/login");

	// * Dynamic Router(动态路由，根据后端返回的菜单数据生成的一维数组)
	const dynamicRouter = store.getState().auth.authRouter;
	// * Static Router(静态路由，必须配置首页地址，否则不能进首页获取菜单、按钮权限等数据)，获取数据的时候会loading，所有配置首页地址也没问题
	const staticRouter = [HOME_URL, "/403"];
	const routerList = dynamicRouter.concat(staticRouter);

	// * 如果访问的地址没有在路由表中重定向到403页面
	if (routerList.indexOf(pathname) == -1) return navigate("/403");
};
export default guard;
