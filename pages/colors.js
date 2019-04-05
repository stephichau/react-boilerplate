import React from 'react';
import Colors from '../src/containers/Colors/Colors';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n';
import {Provider} from 'react-redux';
import store from '../src/store';

const colors = () => {
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <Colors />
            </I18nextProvider>
        </Provider>
    );
}
  
export default colors;