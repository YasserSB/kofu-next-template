import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/configs';
import { counterSlice } from '@/app/_stores';

const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const useCounter = () => {
	const data = useSelector((state: RootState) => state.counter);
	const dispatch = useDispatch();

	return {
		data,
		increment: () => dispatch(increment()),
		decrement: () => dispatch(decrement()),
		incrementByAmount: (amount: number) => dispatch(incrementByAmount(amount)),
	};
};
