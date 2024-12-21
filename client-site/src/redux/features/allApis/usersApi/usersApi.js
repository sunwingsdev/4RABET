import baseApi from "../../baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Register a user
    addUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    // get all users
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetUsersQuery,
} = usersApi;
