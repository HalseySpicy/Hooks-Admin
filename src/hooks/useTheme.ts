import { RootState, useDispatch, useSelector } from "@/redux";
import { setWeakOrGray } from "@/redux/modules/global";

/**
 * @description 全局主题设置
 * */
const useTheme = () => {
	const dispatch = useDispatch();
	const { weakOrGray } = useSelector((state: RootState) => state.global.themeConfig);

	const initTheme = () => {
		const body = document.documentElement as HTMLElement;
		if (weakOrGray) body.setAttribute("style", "");
		if (weakOrGray === "weak") body.setAttribute("style", "filter: invert(80%)");
		if (weakOrGray === "gray") body.setAttribute("style", "filter: grayscale(1)");
		dispatch(setWeakOrGray(weakOrGray));
	};
	initTheme();

	return {
		initTheme
	};
};

export default useTheme;
