import * as types from "@/redux/mutation-types";

// * setBreadcrumbList
export const setBreadcrumbList = (breadcrumbList: { [key: string]: any }) => ({
	type: types.SET_BREADCRUMB_LIST,
	breadcrumbList
});
