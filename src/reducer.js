export const initialState = {
  auth_user_id: null,
  auth_user_name: null,
  auth_user_image: null,
};

export const actionTypes = {
  SET_AUTH_USER_ID: "SET_AUTH_USER_ID",
  SET_AUTH_USER_NAME: "SET_AUTH_USER_NAME",
  SET_AUTH_USER_IMAGE: "SET_AUTH_USER_IMAGE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH_USER_ID:
      return {
        ...state,
        auth_user_id: action.auth_user_id,
      };
    case actionTypes.SET_AUTH_USER_NAME:
      return {
        ...state,
        auth_user_name: action.auth_user_name,
      };
    case actionTypes.SET_AUTH_USER_IMAGE:
      return {
        ...state,
        auth_user_image: action.auth_user_image,
      };
    default:
      return state;
  }
};

export default reducer;
