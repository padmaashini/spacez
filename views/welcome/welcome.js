import React from 'react';
import { View } from 'react-native';

import { Button } from 'react-native-paper';
import { Container } from './welcome.styles';

const Welcome = () => {
    return (
        <Container>
            Hello
            <Button mode="contained">Login</Button>
            <Button mode="contained">Sign Up</Button>
        </Container>
    )
}

export default Welcome; 