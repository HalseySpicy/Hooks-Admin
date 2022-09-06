import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { localGet } from "@/utils/util";

const token: string = localGet("token");
const configState = {
	headers: { "x-access-token": token },
	// 默认地址请求地址，可在 .env 开头文件中修改
	baseURL: import.meta.env.VITE_API_URL as string,
	// 设置超时时间（10s）
	timeout: 10000,
	// 跨域时候允许携带凭证
	withCredentials: true
};

const axiosBaseQuery =
	(
		{ baseUrl }: { baseUrl: string } = { baseUrl: "" }
	): BaseQueryFn<{
		url: string;
		method: AxiosRequestConfig["method"];
		data?: AxiosRequestConfig["data"];
		params?: AxiosRequestConfig["params"];
		config?: object;
	}> =>
	async ({ url, method, data, params, config }) => {
		try {
			const result = await axios({ url: baseUrl + url, method, data, params, ...{ ...configState, ...config } });
			return { data: result.data };
		} catch (axiosError) {
			let err = axiosError as AxiosError;
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message
				}
			};
		}
	};

export default axiosBaseQuery;
