const initialState = {
  token: null,
  isAuthenticated: false,
  user: null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        token: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
