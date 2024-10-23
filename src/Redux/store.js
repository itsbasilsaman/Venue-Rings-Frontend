 
import { configureStore } from "@reduxjs/toolkit";
import { favoriteContent } from "./favoriteContent";



export const store = configureStore({
   reducer:{
    counter:favoriteContent
   }
})