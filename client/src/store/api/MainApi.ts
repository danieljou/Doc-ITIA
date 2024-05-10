/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BACKEND_URL } from "../constants/env";

import { BACKEND_API_URL } from "../../utils/env";
import { initialState } from "../slices/AuthSlice";
import { Client, Dash, Succursale } from "../../interfaces/mainInterfaces";

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
		CreateClient: builder.mutation({
			query: (data: Omit<Client, "id">) => {
				return {
					url: "clients/",
					method: "POST",
					body: data,
				};
			},
		}),
		UpdateClient: builder.mutation({
			query: (data: Client) => {
				return {
					url: `clients/${data.id}/`,
					method: "PUT",
					body: data,
				};
			},
		}),
		CreateSurcusalle: builder.mutation({
			query: (data: Omit<Succursale, "id">) => {
				return {
					url: "succursales/",
					method: "POST",
					body: data,
				};
			},
		}),
		DeleteClient: builder.mutation({
			query: (id: number) => {
				return {
					url: `clients/${id}/`,
					method: "DELETE",
				};
			},
		}),
		DeleteSurcusalle: builder.mutation({
			query: (id: number) => {
				return {
					url: `succursales/${id}/`,
					method: "DELETE",
				};
			},
		}),
		getSuccursale: builder.query<Succursale[], void>({
			query: () => "succursales/",
		}),
		getClients: builder.query<Succursale[], void>({
			query: () => "clients/",
		}),
		getDash: builder.query<Dash, void>({
			query: () => "dash_api/",
		}),
		getAssurance: builder.query<Dash, void>({
			query: () => "assurances/",
		}),
	}),
});

export const {
	useGetSuccursaleQuery,
	useGetClientsQuery,
	useCreateClientMutation,
	useDeleteClientMutation,
	useCreateSurcusalleMutation,
	useDeleteSurcusalleMutation,
	useGetDashQuery,
	useUpdateClientMutation,
	useGetAssuranceQuery,
} = MainApi;
