import { searchRoute } from "@/utils/util";
import { useLocation } from "react-router-dom";
import { routerArray } from "@/routers";
import { RootState, useSelector } from "@/redux";

/**
 * @description 页面按钮权限 hooks
 * */
const useAuthButtons = () => {
	const { authButtons } = useSelector((state: RootState) => state.auth);
	const { pathname } = useLocation();
	const route = searchRoute(pathname, routerArray);

	return {
		BUTTONS: authButtons[route.meta!.key!] || {}
	};
};

export default useAuthButtons;
