import { createSlice } from '@reduxjs/toolkit'


const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
    },
    reducers: {
        fetchProductSuccess: (state, action) => {
            // state.loading = false
            state.data = action.payload.data
            state.error = null
        }
    }
})

export const {
    fetchProductSuccess
} = productSlice.action

export default productSlice.reducer