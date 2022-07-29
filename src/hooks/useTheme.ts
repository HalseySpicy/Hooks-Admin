const useTheme = (props: any) => {
	const initTheme = () => {
		const body = document.documentElement as HTMLElement;
		if (!props.themeConfig.weakOrGray) body.setAttribute("style", "");
		if (props.themeConfig.weakOrGray === "weak") body.setAttribute("style", "filter: invert(80%)");
		if (props.themeConfig.weakOrGray === "gray") body.setAttribute("style", "filter: grayscale(1)");
		props.setWeakOrGray(props.themeConfig.weakOrGray);
	};

	initTheme();
	return {
		initTheme
	};
};

export default useTheme;
