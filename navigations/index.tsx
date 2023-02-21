import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthContainer from './AuthContainer';

const NavContainer = () => {
    return (
        <NavigationContainer>
            <AuthContainer />
        </NavigationContainer>
    )
}

export default NavContainer