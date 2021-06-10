import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: [],
    selectUser: []
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.user = action.payload
        },
        setSelectUsers: (state, action) => {
            state.selectUser = action.payload
        }
    },
});

export const {setUsers, setSelectUsers} = usersSlice.actions;
export const selectUsers = (state) => state.users.user;
export const selectSelectUsers = (state) => state.users.selectUser;

export default usersSlice.reducer;
