import {createSlice} from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

const curr_user = useSelector((state)=>state.user.id)
const socialData = {
    ids: {},
    users: {},
    posts: []
}

const socialSlice = createSlice({
    name: "SocialData",
    initialState: socialData,
    reducers: {
        follow: (state, action) => {
            state.users[curr_user].following.add(action.payload.id)
            state.users[action.payload.id].followers.add(curr_user)
        },
        unfollow: (state, action) => {
            state.users[curr_user].following.delete(action.payload.id)
            state.users[action.payload.id].followers.delete(curr_user)
        }, 
        post: (state, action) => {
            state.posts.push(action.payload.post);
        }
    }
})

export const {follow, unfollow, post} = socialSlice.actions;
export default socialSlice.reducer;