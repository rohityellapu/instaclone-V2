import { createSlice } from '@reduxjs/toolkit'
const apiURL = 'http://localhost:5000/post';
import axios from 'axios';
export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {
        fetchData: async (n) => {
            if (!n) n = 5;
            await axios.get(apiURL + `?load=${n}`)
                .then((items) => {
                    state.posts = [...state.posts, ...items.data.posts]
                })
                .catch(e => console.log(e))
        }
    },
})

// Action creators are generated for each case reducer function
export const { fetchData } = postSlice.actions

export default postSlice.reducer