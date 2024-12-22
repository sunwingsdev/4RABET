import baseApi from "../../baseApi";

const depositApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all deposits
    getAllDeposits: builder.query({
      query: () => "/deposits",
      providesTags: ["deposit"],
    }),
  }),
});

export const { useGetAllDepositsQuery } = depositApi;
