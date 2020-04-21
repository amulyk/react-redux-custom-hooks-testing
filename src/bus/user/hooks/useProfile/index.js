// Core
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { userActions } from '../../actions';

export const useProfile = () => {
    const dispatch = useDispatch();

    const { role } = useSelector((state) => state.user);

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
