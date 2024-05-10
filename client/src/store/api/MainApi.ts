/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { initialState } from "../slices/AuthSlice";
import { Succursale } from "../../interfaces/mainInterfaces";

// import { store } from "../store";

export const MainApi = createApi({
	reducerPath: "MainApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BACKEND_API_URL}api/`,
		prepareHeaders: (headers) => {
			const user = localStorage.getItem("WD_USER");
			if (user) {
				const userParsed = JSON.parse(user) as initialState;
				// console.log("USER PARSED ", userParsed);
				headers.set("authorization", `Bearer ${userParsed.access}`);
				headers.set("Content-type", "application/json");
				console.log(headers.get("authorization"));
			}
			return headers;
		},
	}),

	endpoints: (builder) => ({
		// CreateArticle: builder.mutation({
		// 	// query: (artcicle: ArticleCreate) => {
		// 	// 	return {
		// 	// 		url: "create_article/",
		// 	// 		method: "POST",
		// 	// 		body: artcicle,
		// 	// 	};
		// 	// },
		// }),
		getSuccursale: builder.query<Succursale, void>({
			query: () => "succursales/",
		}),
		getClients: builder.query<Succursale, void>({
			query: () => "clients/",
		}),
	}),
});

export const { useGetSuccursaleQuery, useGetClientsQuery } = MainApi;
