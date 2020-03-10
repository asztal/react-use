import { useReducer } from "react";

const incrementParameter = (num: number): number => ++num % 1_000_000;

const useUpdate = () => {
  // Use useReducer as the `dispatch` function is guaranteed not to change
  // https://reactjs.org/docs/hooks-reference.html#usereducer
  const [, dispatch] = useReducer(incrementParameter, 0);
  return dispatch;
};

export default useUpdate;
