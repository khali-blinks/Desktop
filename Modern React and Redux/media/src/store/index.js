import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersReducer } from './slices/usersSlice';
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]:albumsApi.reducer,// RTK Query API slice
    [photosApi.reducerPath]:photosApi.reducer // RTK Query API slice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  }
});

setupListeners(store.dispatch);

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from './apis/photosApi';

// Middleware is like a checkpoint that every Redux action passes through before reaching the reducers. It can:
// Inspect actions
// Modify actions
// Stop actions
// Dispatch new actions
// Why RTK Query Needs Custom Middleware?
// RTK Query isn't just simple Redux - it needs to:
// Track API requests (Who's asking for what data?)
// Manage cache timing (When should data expire?)