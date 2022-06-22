import { AnyAction } from "redux";
import { TabsState } from "@/redux/interface";
import { HOME_URL } from "@/config/config";
import produce from "immer";
import * as types from "@/redux/mutation-types";

const tabsState: TabsState = {
	// tabsActive 其实没啥用，使用 pathname 就可以了
	tabsActive: HOME_URL,
	tabsList: [
		{
			title: "首页",
			path: HOME_URL
		}
		// {
		// 	title: "数据大屏",
		// 	path: "/dataScreen/index"
		// },
		// {
		// 	title: "使用 Hooks",
		// 	path: "/proTable/useHooks"
		// },
		// {
		// 	title: "使用 Component",
		// 	path: "/proTable/useComponent"
		// },
		// {
		// 	title: "数据可视化",
		// 	path: "/dashboard/dataVisualize"
		// },
		// {
		// 	title: "内嵌页面",
		// 	path: "/dashboard/embedded"
		// }
	]
};

// tabs reducer
const tabs = (state: TabsState = tabsState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.ADD_TABS:
				if (draftState.tabsList.every(item => item.path !== action.tabItem.path)) {
					draftState.tabsList.push(action.tabItem);
				}
				break;
			case types.SET_TABS_ACTIVE:
				draftState.tabsActive = action.tabsActive;
				break;
			default:
				return draftState;
		}
	});

export default tabs;
