export const initialState = {
  accessToken: null,
  user: null,
};

const authReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
