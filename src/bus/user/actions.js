// Types
import { types } from './types';

export const userActions = {
    changeRole: (payload) => {
        return {
            type: types.USER_CHANGE_ROLE,
            payload
        }
    }
};
