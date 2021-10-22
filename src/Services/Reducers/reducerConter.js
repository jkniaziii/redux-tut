import { ADD_CONTER, REMOVE_CONTER } from "../constant";

const initialConter = 0;

const conterItem = (state = initialConter, action) => {
  switch (action.type) {
    case ADD_CONTER:
      return state + 1;

    case REMOVE_CONTER:
      return state - 1;
    default:
      return state;
  }
};

export default conterItem;
