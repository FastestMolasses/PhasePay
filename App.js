import React from 'react';
import { MainTabNav } from './Router';

// Fixing RN debug env
// react-native upgrade
// rm -rf /usr/local/var/run/watchman && brew uninstall watchman && brew install watchman

export default class App extends React.Component {
    render() {
        return <MainTabNav />;
    }
}
