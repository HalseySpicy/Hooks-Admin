import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";
import global from "./slice/globalSlice";
import menu from "./slice/menuSlice";
import tabs from "./slice/tabsSlice";
import auth from "./slice/authSlice";
import breadcrumb from "./slice/breadcrumbSlice";
import { loginApi } from "./api/loginApi";

// create reducer
const reducer = combineReducers({
	global,
	menu,
	tabs,
	auth,
	breadcrumb
});

// store
export const store = configureStore({
	reducer: {
		[loginApi.reducerPath]: loginApi.reducer,
		reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loginApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
