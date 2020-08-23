import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import SvgUri from 'react-native-svg';

// import { Container } from './styles';

import api from '../../services/api';

const Americas = () => {
    const [countries, setCountries] = useState([]);

    async function getCountries () {
        try {
            const response = await api.get('region/americas');

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
                            <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#ddd", borderRadius: 4, padding: 15, marginVertical: 15 }} key={country.name}>
                                <SvgUri width={200} height={100} uri={country.flag} />
                                <Text>{country.name}</Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Americas;