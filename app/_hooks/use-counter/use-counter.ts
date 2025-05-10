import { useDispatch, useSelector } from 'react-redux';
import {
  decrementCounter,
  incrementCounter,
  incrementCounterByAmount,
} from '@/stores';
import { RootState } from '@/configs';

export const useCounter = () => {
  const data = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return {
    data,
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter()),
    incrementByAmount: (amount: number) =>
      dispatch(incrementCounterByAmount(amount)),
  };
};
