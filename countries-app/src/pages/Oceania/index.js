import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

// import { Container } from './styles';

import api from '../../services/api';

const Oceania = () => {
    const [countries, setCountries] = useState([]);

    async function getCountries () {
        try {
            const response = await api.get('region/oceania');

            setCountries(response.data);
        } catch (error) {
            alert('Falha em obter os dados');
        }
    };

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <SafeAreaView
            style={{
                background: "#232323",
                flex: 1,
                padding: 15,
            }}
        >
            <ScrollView>
                <View>
                    {countries.map(country => {
                        return (
                            <View style={{ margin: 15 }} key={country.name}>
                                <Text>{country.name}</Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Oceania;