import { createAsyncThunk } from "@reduxjs/toolkit";

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched. Thunks are
// // typically used to make async requests.
export const getPosts = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1', )
      .then((response) => response.json());
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);