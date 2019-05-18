import * as actionTypes from "./actionsTypes";

export const save_result = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

export const store_result = res => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCtr = getState().counter.counter;
      console.log(oldCtr);
      dispatch(save_result(res));
    }, 2000);
  };
};

export const delete_result = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultId: id
  };
};
