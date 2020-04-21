// Hooks
import { useProfile } from './index';

// Selectors
import { selectors } from '../../selectors';

// Actions
import { userActions } from '../../actions';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
    useDispatch: () => jest.fn()
}));

const setup = (role = 'unknown') => {
    jest.spyOn(selectors, 'userRole').mockReturnValue(role);
    jest.spyOn(userActions, 'changeRole');
};

describe('useProfile', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    test('Property role returned the correct value', () => {
        const initialRole = 'unknown';

        setup(initialRole);

        const { role } = useProfile();

        expect(role).toBe(initialRole);
    });

    test('Method changeUserRoleToAdmin dispatched the correct action', () => {
        setup();

        const { changeUserRoleToAdmin } = useProfile();
        changeUserRoleToAdmin();

        expect(userActions.changeRole).toHaveBeenCalledTimes(1);
    });

    test('Method changeUserRoleToAdmin dispatched the action with correct payload', () => {
        setup();

        const { changeUserRoleToAdmin } = useProfile();
        changeUserRoleToAdmin();

        expect(userActions.changeRole).toHaveBeenCalledWith('admin');
    });

    test('Method changeUserRoleToCustomer dispatched the correct action', () => {
        setup();

        const { changeUserRoleToCustomer } = useProfile();
        changeUserRoleToCustomer();

        expect(userActions.changeRole).toHaveBeenCalledTimes(1);
    });

    test('Method changeUserRoleToCustomer dispatched the action with correct payload', () => {
        setup();

        const { changeUserRoleToCustomer } = useProfile();
        changeUserRoleToCustomer();

        expect(userActions.changeRole).toHaveBeenCalledWith('customer');
    });
});
