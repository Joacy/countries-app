import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { SvgUri } from 'react-native-svg';

import api from '../../services/api';

import styles from './styles';

const Africa = () => {
    const [countries, setCountries] = useState([]);

    async function getCountries () {
        try {
            const response = await api.get('region/africa');

            setCountries(response.data);
        } catch (error) {
            alert('Falha em obter os dados');
        }
    };

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                {countries.map(country => {
                    return (
                        <View style={styles.country} key={country.name}>
                            <SvgUri width={200} height={100} uri={country.flag} />
                            <Text style={styles.name}>{country.name}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default Africa;