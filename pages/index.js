import React from 'react';

import App from '../src/containers/App/App';

import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n';
import {Provider} from 'react-redux';
import store from '../src/store';

const Index = () => {
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </Provider>
    );
}
  
export default Index;