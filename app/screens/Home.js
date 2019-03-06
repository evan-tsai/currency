import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'TWD';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '3200';
const TEMP_CONVERSION_RATE = 32;
const TEMP_CONVERSION_DATE = new Date();

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

    handleSwapCurrency = () => {
        console.log('press swap')
    };

    handleOptionsPress = () => {
        console.log('handle options')
    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content"></StatusBar>
                <Header onPress={this.handleOptionsPress} />
                <KeyboardAvoidingView behavior='padding'>
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
                    <LastConverted 
                        date={TEMP_CONVERSION_DATE}
                        base={TEMP_BASE_CURRENCY}
                        quote={TEMP_QUOTE_CURRENCY}
                        conversionRate={TEMP_CONVERSION_RATE} />
                    <ClearButton
                        text="Reverse Currencies"
                        onPress={this.handleSwapCurrency} />
                </KeyboardAvoidingView>
            </Container>
        )
    }
}
export default Home;