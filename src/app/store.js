import { configureStore } from '@reduxjs/toolkit';
import LogingReducer from '../features/isLogged/isLoggedSlice';
import PostsReducer from '../features/PostReducer/PostsSlice'; 

export const store = configureStore({
  reducer: {
    Login: LogingReducer,
    users: PostsReducer,
  },
});