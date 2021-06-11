import { configureStore } from '@reduxjs/toolkit';
import personSlice from './person/PersonSlice';
import tabValueSlice from './tabvalue/tabvalueSlice';
import usersSlice from "./Users/UsersSlice";

export const store = configureStore({
  reducer: {
    person: personSlice,
    tabValue: tabValueSlice,
    users: usersSlice,
  },
});
