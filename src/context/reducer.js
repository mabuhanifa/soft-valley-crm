export const reducer = (state, action) => {
  switch (action.type) {
    case "token":
      return { ...state, token: action.payload };

    default:
      throw new Error();
  }
};
