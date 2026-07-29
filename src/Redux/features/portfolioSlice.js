import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPortfoliosAPI } from '../services/api';

export const fetchPortfolios = createAsyncThunk(
    'portfolio/fetchPortfolios',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllPortfoliosAPI();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPortfolios.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPortfolios.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload && Array.isArray(action.payload.data)) {
                    state.data = action.payload.data;
                } else if (Array.isArray(action.payload)) {
                    state.data = action.payload;
                } else {
                    state.data = [];
                }
            })
            .addCase(fetchPortfolios.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch portfolios';
            });
    },
});

export default portfolioSlice.reducer;
