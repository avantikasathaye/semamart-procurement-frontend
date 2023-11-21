import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/product"
            }),
            keepUnusedDataFor: 5 //seconds
        }),
    })
});

export const {useGetProductsQuery} = productsApiSlice;