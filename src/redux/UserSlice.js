import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'user',
    initialState: {
        user: [],
    },
    reducers: { // IMMER
        userLogin: (state, action) => {
            state.user.push(action.payload);
        },
        updateUser: (state, action) => {
            state.user[0] = { ...state.user[0], ...action.payload }

        },
        userLogout: (state, action) => {
            state = []
        },
        deleteAll: (state, action) => {
            state.user = []
        }
    }
});