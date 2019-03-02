export default function reducer(state = {
  isMobile: false,
}, action) {
  const { type } = action;
  if (type === 'APP_MOBILE_TRUE') return { ...state, isMobile: true };
  if (type === 'APP_MOBILE_FALSE') return { ...state, isMobile: false };
  return state;
}
