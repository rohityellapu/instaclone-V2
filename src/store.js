import { configureStore } from '@reduxjs/toolkit'
import postSlice from './features/posts'

export default configureStore({
    reducer: {
        posts: postSlice,
    },
})