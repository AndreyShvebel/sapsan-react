// eslint-disable-next-line no-restricted-imports
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';

import { TAppDispatch, TAppStore, TRootState } from '@/app/store/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export const useAppStore: () => TAppStore = useStore;
