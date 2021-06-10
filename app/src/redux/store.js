import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import personSlice from './person/PersonSlice';
import tabValueSlice from './tabvalue/tabvalueSlice';
import usersSlice from "./Users/UsersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    person: personSlice,
    tabValue: tabValueSlice,
    users: usersSlice,
  },
});
