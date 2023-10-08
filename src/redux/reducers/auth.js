import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import REDUCERS_NAMES from './names';
import {createAsyncActionURL} from './utils';

const ASYNC_ACTIONS_NAMES = Object.freeze({
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
});

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: null,
  userToken: null,
};

const login = createAsyncThunk(
  createAsyncActionURL(REDUCERS_NAMES.AUTH, ASYNC_ACTIONS_NAMES.LOGIN),
  // TODO: add login action
  async () => {},
);

const logout = createAsyncThunk(
  createAsyncActionURL(REDUCERS_NAMES.AUTH, ASYNC_ACTIONS_NAMES.LOGOUT),
  // TODO: add logout action
  async () => {},
);

const authSlice = createSlice({
  name: REDUCERS_NAMES.AUTH,
  initialState,
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.userToken = action.payload.userToken;
    });
    builder.addCase(login.rejected, state => {
      state.loading = false;
      state.isLoggedIn = false;
      state.user = null;
      state.userToken = null;
    });
  },
});

export {login, logout};

export default authSlice.reducer;
