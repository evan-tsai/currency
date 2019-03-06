import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'TWD';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '3200';

class Home extends Component {
    handlePressBaseCurrency = () => {
        console.log('press base');
    };

    handlePressQuoteCurrency = () => {
        console.log('press quote');
    };

    handleTextChange = (text) => {
        console.log(text);
    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"></StatusBar>
                <Logo />
                <InputWithButton 
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType="numeric"
                    onChangeText={this.handleTextChange} />
                <InputWithButton 
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency}
                    defaultValue={TEMP_QUOTE_PRICE}
                    editable={false}
                    value={TEMP_QUOTE_PRICE} />
            </Container>
        )
    }
}
export default Home;