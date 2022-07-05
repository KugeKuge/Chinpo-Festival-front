import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pageNameReducer from '../features/pageName/pageNameSlice';

export const store = configureStore({
  reducer: {
    pageName: pageNameReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
