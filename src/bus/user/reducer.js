// Types
import { types } from './types';

const initialState = {
    role: 'unknown'
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_CHANGE_ROLE:
            return {
                role: action.payload
            }
        default:
            return state;
    }
};
