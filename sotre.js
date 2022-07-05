import { configureStore } from "@reduxjs/toolkit";
import { imagesReducer } from "./features/images-slice";


export const store = configureStore({
    reducer: {
        images: imagesReducer
    }
})