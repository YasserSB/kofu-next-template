import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICounterState {
  value: number;
}

const initialState: ICounterState = { value: 0 };

export const counterSlice = createSlice({
  name: 'counter-slice',
  initialState,
  reducers: {
    incrementCounter(state) {
      state.value++;
    },
    decrementCounter(state) {
      state.value--;
    },
    incrementCounterByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { incrementCounter, decrementCounter, incrementCounterByAmount } =
  counterSlice.actions;
