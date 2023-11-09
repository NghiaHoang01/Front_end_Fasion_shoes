import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { userLoginService } from "service/LoginService"

const initialState = {
    isLoading: false,
    userInfo: {},
    status: ''
}

export const loginAsync = createAsyncThunk("login", async (params, { rejectWithValue }) => {
    try {
        const response = await userLoginService(params);
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
})

export const login = createSlice({
    name: 'LoginSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            //user login
            .addCase(loginAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userInfo = action.payload
            })
    }
})

export const loginSelector = state => state.login;

export default login.reducer;