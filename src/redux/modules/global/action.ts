import * as types from "@/redux/mutation-types";

// * setToken
export const setToken = (token: string) => ({
	type: types.SET_TOKEN,
	token
});

// * setAssemblySize
export const setAssemblySize = (assemblySize: string) => ({
	type: types.SET_ASSEMBLY_SIZE,
	assemblySize
});

// * setLanguage
export const setLanguage = (language: string) => ({
	type: types.SET_LANGUAGE,
	language
});

// * setDark
export const setDark = (isDark: boolean) => ({
	type: types.SET_DARK,
	isDark
});

// * setWeakOrGray
export const setWeakOrGray = (weakOrGray: string) => ({
	type: types.SET_WEAK_OR_GRAY,
	weakOrGray
});
