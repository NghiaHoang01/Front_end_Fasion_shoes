const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    filter: {
        brand: 'ALL',
        parentCategory: '',
        childCategory: '',
        sale: false,
        color: '',
        minPrice: null,
        maxPrice: null,
        sort: 'newest',
        search: ''
    }
}

const shopNow = createSlice({
    name: 'shopNowSlice',
    initialState,
    reducers: {
        filter: (state, action) => {
            state.filter = { ...state.filter, ...action.payload }
        },
        resetFilter: (state) => {
            state.filter = initialState.filter
        }
    }
})

const { reducer, actions } = shopNow
export const { filter, resetFilter } = actions
export default reducer