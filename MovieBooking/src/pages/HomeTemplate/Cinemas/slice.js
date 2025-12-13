import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api"

const initialState = {
    loading: false,
    dataCinemaList: null,
    dataCinema: null,
    dataTimeShow: null,
    error: null,
};

// Fetch danh sách hệ thống rạp
export const fetchCinemaList = createAsyncThunk(
    "cinema/fetchCinemaList",
    async (_, { rejectWithValue }) => {
        try {
            const res = await api.get("QuanLyRap/LayThongTinHeThongRap");
            return res.data.content;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

// Fetch cụm rạp theo hệ thống
export const fetchCinema = createAsyncThunk(
    "cinema/fetchCinema",
    async (maHeThongRap, { rejectWithValue }) => {
        try {
            const res = await api.get(
                `QuanLyRap/LayThongTinCumRapTheoHeThong`,
                { params: { maHeThongRap } }
            );
            return res.data.content;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

// Fetch lịch chiếu theo hệ thống
export const fetchTimeShow = createAsyncThunk(
    "cinema/fetchTimeShow",
    async (maHeThongRap, { rejectWithValue }) => {
        try {
            const res = await api.get(
                "QuanLyRap/LayThongTinLichChieuHeThongRap",
                {
                    params: {
                        maHeThongRap,
                        maNhom: "GP07",
                    },
                }
            );
            return res.data.content;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const cinemaSlice = createSlice({
    name: "cinema",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Cinema List
            .addCase(fetchCinemaList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCinemaList.fulfilled, (state, action) => {
                state.loading = false;
                state.dataCinemaList = action.payload;
            })
            .addCase(fetchCinemaList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Cinema
            .addCase(fetchCinema.pending, (state) => { state.loading = true; })
            .addCase(fetchCinema.fulfilled, (state, action) => {
                state.loading = false;
                state.dataCinema = action.payload;
            })
            .addCase(fetchCinema.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Time Show
            .addCase(fetchTimeShow.pending, (state) => { state.loading = true; })
            .addCase(fetchTimeShow.fulfilled, (state, action) => {
                state.loading = false;
                state.dataTimeShow = action.payload;
            })
            .addCase(fetchTimeShow.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

    },
});

export default cinemaSlice.reducer;
