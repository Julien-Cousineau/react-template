export default function reducer(state = {
  storeNum: 10,
}, action) {
  const { storeNum } = state;
  const { type } = action;
  if (type === 'ACC') return { ...state, storeNum: storeNum + 1 };
  if (type === 'DEC') return { ...state, storeNum: storeNum - 1 };
  if (type === 'MUL') return { ...state, storeNum: storeNum * 2 };
  return state;
}
