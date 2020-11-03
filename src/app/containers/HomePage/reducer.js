// @flow
import flow from 'lodash/fp/flow';
import set from 'lodash/fp/set';

export const initialState = {
  isLoading: false,
  data: null,
  status: '',
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA': {
      return flow(set('isLoading', true), set('status', 'PENDING'))(state);
    }

    default:
      return state;
  }
};

export default homePageReducer;
