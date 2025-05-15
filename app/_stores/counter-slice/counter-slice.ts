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
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		incrementByAmount(state, action: PayloadAction<number>) {
			state.value += action.payload;
		},
	},
});
