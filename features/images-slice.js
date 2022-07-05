import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getImagesList = createAsyncThunk(
    '@@images/get-images-list',

    async () => {
        const response = await fetch('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9');
        const data = await response.json();
        return data;  
    }
);

export const getSelectedImage = createAsyncThunk(
    '@@images/get-selected-image',

    async (arg) => {
        const {id} = arg;
        const response = await fetch(`https://api.unsplash.com/photos/${id}/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9`);
        const data = await response.json();
        return data; 
    }

   

    
)

const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        imagesList: [],
        selectedImage: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getImagesList.pending, (state) => {
            state.loading = true;
        })
        .addCase(getImagesList.fulfilled, (state, action) => {
            state.loading = false;
            state.imagesList = action.payload;
        })
        .addCase(getImagesList.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Something went wrong' || action.payload;
        })
        .addCase(getSelectedImage.pending, (state) => {
            state.loading = true;
        })
        .addCase(getSelectedImage.fulfilled, (state, action) => {
            state.loading = false;
            state.selectedImage = action.payload;
        })
        .addCase(getSelectedImage.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Something went wrong' || action.payload;
        })
    }
})

export const imagesReducer = imagesSlice.reducer;