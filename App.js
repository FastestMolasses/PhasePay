import React from 'react';
import Router from './Router';
import Registration from './src/pages/RegistrationPage.js';

// Fixing RN debug env
// react-native upgrade
// rm -rf /usr/local/var/run/watchman && brew uninstall watchman && brew install watchman

export default class App extends React.Component {
    render() {
        return <Router />;
    }
}
