import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5020" }),
  endpoints: (builder) => ({
    reducerPath: "api",
    tagTypes: ["Todos"],
    getTodos: builder.query({
      query: () => "/todos",
      providesTags: ["Todos"],
    }),
    getSingleTodo: builder.query({
      query: (id) => `/todos/${id}`,
      providesTags: ["Todos"],
    }),

    addTodos: builder.mutation({
      query: (name) => ({
        url: "/todos",
        method: "post",
        body: { name, status: "pending" },
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, useGetSingleTodoQuery, useAddTodosMutation, useDeleteTodoMutation } =
  apiSlice;
