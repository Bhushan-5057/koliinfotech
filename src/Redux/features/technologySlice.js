import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTechnologiesAPI } from '../services/api';

export const fetchTechnologies = createAsyncThunk(
    'technology/fetchTechnologies',
    async (type, { rejectWithValue }) => {
        try {
            const response = await getTechnologiesAPI(type);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const technologySlice = createSlice({
    name: 'technology',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTechnologies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTechnologies.fulfilled, (state, action) => {
                state.loading = false;
                // Robustly handle different response structures
                if (action.payload && Array.isArray(action.payload.data)) {
                    state.data = action.payload.data;
                } else if (action.payload && Array.isArray(action.payload.technologies)) {
                    state.data = action.payload.technologies;
                } else if (Array.isArray(action.payload)) {
                    state.data = action.payload;
                } else {
                    state.data = [];
                }
            })
            .addCase(fetchTechnologies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch technologies';
            });
    },
});

export default technologySlice.reducer;
