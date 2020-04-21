// Core
import React from 'react';
import { Provider } from 'react-redux';

// Components
import { User } from './bus/user';

// Other
import { store } from './init/store';

export const App = () => {
    return (
        <>
            <Provider store={store}>
                <User />
            </Provider>
        </>
    );
};
