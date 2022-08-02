import { BreadcrumbState } from "@/redux/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const breadcrumbState: BreadcrumbState = {
	breadcrumbList: {}
};

const breadcrumbSlice = createSlice({
	name: "breadcrumb",
	initialState: breadcrumbState,
	reducers: {
		setBreadcrumbList(state: BreadcrumbState, { payload }: PayloadAction<{ [propName: string]: any }>) {
			state.breadcrumbList = payload;
		}
	}
});

export const { setBreadcrumbList } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
