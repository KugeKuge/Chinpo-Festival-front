import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import chinpoStringReducer from '../features/chinpoString/chinpoStringSlice';

export const store = configureStore({
  reducer: {
    chinpoString: chinpoStringReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
