import { searchRoute } from "@/utils/util";
import { useLocation } from "react-router-dom";
import { routerArray } from "@/routers";
import { store } from "@/redux";

/**
 * @description 页面按钮权限 hooks
 * */
const useAuthButtons = () => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, routerArray);

	return {
		BUTTONS: store.getState().auth.authButtons[route.meta!.key!] || {}
	};
};

export default useAuthButtons;
