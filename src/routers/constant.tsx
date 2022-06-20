import Layout from "@/layouts/index";
import { createContext } from "react";

export const LayoutTitleContext = createContext({});

export const { Provider, Consumer } = LayoutTitleContext;

/**
 * @description: default layout
 */
export const LayoutIndex = (props: { title?: string } = {}) => {
	return (
		<Provider value={props}>
			<Layout />
		</Provider>
	);
};
