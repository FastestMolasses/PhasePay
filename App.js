import React from 'react';
import { MainTabNav } from './Router';
import Registration from './src/pages/RegistrationPage.js';

export default class App extends React.Component {
    render() {
        if(true)
        return <Registration />;
            else
                return <MainTabNav/>;
        ;
    }
}
