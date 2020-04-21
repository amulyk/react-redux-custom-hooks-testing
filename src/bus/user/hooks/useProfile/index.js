// Core
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { userActions } from '../../actions';

// Selectors
import { selectors } from '../../selectors';

export const useProfile = () => {
    const dispatch = useDispatch();

    const role = useSelector(selectors.userRole);

    const changeUserRoleToAdmin = () => {
        dispatch(userActions.changeRole('admin'));
    };

    const changeUserRoleToCustomer = () => {
        dispatch(userActions.changeRole('customer'));
    };

    return {
        role,
        changeUserRoleToAdmin,
        changeUserRoleToCustomer
    };
};
