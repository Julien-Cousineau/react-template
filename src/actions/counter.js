export const add = () => ({ type: 'ACC' });
export const subtract = () => ({ type: 'DEC' });
export const mult = () => async (dispatch) => {
  const results = await new Promise((resolve) => {
    setTimeout(() => resolve({ type: 'MUL' }), 3000);
  });
  dispatch(results);
};
