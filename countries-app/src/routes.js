import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';

import Africa from './pages/Africa';
import Americas from './pages/Americas';
import Asia from './pages/Asia';
import Europe from './pages/Europe';
import Oceania from './pages/Oceania';

import styles from './styles/menuStyle';

function MenuScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => navigation.navigate('Africa')}
            >
                <Text style={styles.buttonText}>Africa</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => navigation.navigate('Americas')}
            >
                <Text style={styles.buttonText}>Americas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => navigation.navigate('Asia')}
            >
                <Text style={styles.buttonText}>Asia</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => navigation.navigate('Europe')}
            >
                <Text style={styles.buttonText}>Europe</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => navigation.navigate('Oceania')}
            >
                <Text style={styles.buttonText}>Oceania</Text>
            </TouchableOpacity>
        </View>
    );
}

function ModalAfricaScreen ({ navigation }) {
    return (
        <View style={styles.modalRegion}>
            <View style={styles.arrowView} >
                <Feather
                    style={styles.arrow}
                    name="arrow-left"
                    size={24}
                    color={"#E1D6FF"}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Africa />
        </View>
    );
}

function ModalAmericasScreen ({ navigation }) {
    return (
        <View style={styles.modalRegion}>
            <View style={styles.arrowView} >
                <Feather
                    style={styles.arrow}
                    name="arrow-left"
                    size={24}
                    color={"#E1D6FF"}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Americas />
        </View>
    );
}

function ModalAsiaScreen ({ navigation }) {
    return (
        <View style={styles.modalRegion}>
            <View style={styles.arrowView} >
                <Feather
                    style={styles.arrow}
                    name="arrow-left"
                    size={24}
                    color={"#E1D6FF"}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Asia />
        </View>
    );
}

function ModalEuropeScreen ({ navigation }) {
    return (
        <View style={styles.modalRegion}>
            <View style={styles.arrowView} >
                <Feather
                    style={styles.arrow}
                    name="arrow-left"
                    size={24}
                    color={"#E1D6FF"}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Europe />
        </View>
    );
}

function ModalOceaniaScreen ({ navigation }) {
    return (
        <View style={styles.modalRegion}>
            <View style={styles.arrowView} >
                <Feather
                    style={styles.arrow}
                    name="arrow-left"
                    size={24}
                    color={"#E1D6FF"}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <Oceania />
        </View>
    );
}

const MenuStack = createStackNavigator();
const AppStack = createStackNavigator();

function MenuStackScreen () {
    return (
        <MenuStack.Navigator headerMode="none">
            <MenuStack.Screen name="Menu" component={MenuScreen} />
        </MenuStack.Navigator>
    );
}

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator mode="modal" headerMode="none">
                <AppStack.Screen name="Menu" component={MenuStackScreen} />
                <AppStack.Screen name="Africa" component={ModalAfricaScreen} />
                <AppStack.Screen name="Americas" component={ModalAmericasScreen} />
                <AppStack.Screen name="Asia" component={ModalAsiaScreen} />
                <AppStack.Screen name="Europe" component={ModalEuropeScreen} />
                <AppStack.Screen name="Oceania" component={ModalOceaniaScreen} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;