// Core
import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';

// Components
import { User } from './index';

const mockStore = configureMockStore();

Enzyme.configure({ adapter: new Adapter() });

const setup = (initialRole = 'unknown') => {
    const store = mockStore({
        user: {
            role: initialRole
        }
    });

    return mount(
        <Provider store={store}>
            <User />
        </Provider>
    );
};

describe('User component', () => {
    test('Component User should render without any errors', () => {
        setup();
    });

    test('Component User should render user with correct initial role', () => {
        const initialRole = 'unknown';

        const wrapper = setup(initialRole);

        const currentValue = wrapper.find('h1').text();
        const expectedValue = `User Role: ${initialRole}`;

        expect(currentValue).toBe(expectedValue);
    });
});

