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

function MenuScreen ({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 15 }}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={{ marginVertical: 5, paddingVertical: 5, paddingHorizontal: 15, backgroundColor: "#434343", width: "100%", borderRadius: 4 }}
                onPress={() => navigation.navigate('Africa')}
            >
                <Text style={{ color: "#ffffff", textAlign: "center" }}>Africa</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}
                style={{ marginVertical: 5, paddingVertical: 5, paddingHorizontal: 15, backgroundColor: "#434343", width: "100%", borderRadius: 4 }}
                onPress={() => navigation.navigate('Americas')}
            >
                <Text style={{ color: "#ffffff", textAlign: "center" }}>Americas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}
                style={{ marginVertical: 5, paddingVertical: 5, paddingHorizontal: 15, backgroundColor: "#434343", width: "100%", borderRadius: 4 }}
                onPress={() => navigation.navigate('Asia')}
            >
                <Text style={{ color: "#ffffff", textAlign: "center" }}>Asia</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}
                style={{ marginVertical: 5, paddingVertical: 5, paddingHorizontal: 15, backgroundColor: "#434343", width: "100%", borderRadius: 4 }}
                onPress={() => navigation.navigate('Europe')}
            >
                <Text style={{ color: "#ffffff", textAlign: "center" }}>Europe</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}
                style={{ marginVertical: 5, paddingVertical: 5, paddingHorizontal: 15, backgroundColor: "#434343", width: "100%", borderRadius: 4 }}
                onPress={() => navigation.navigate('Oceania')}
            >
                <Text style={{ color: "#ffffff", textAlign: "center" }}>Oceania</Text>
            </TouchableOpacity>
        </View>
    );
}

function ModalAfricaScreen ({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "transparent",
                position: "relative",
            }}
        >
            <Feather
                style={{
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: 15,
                    left: 10,
                    zIndex: 10,
                }}
                name="arrow-left"
                size={24}
                color={"#434343"}
                onPress={() => navigation.goBack()}
            />
            <Africa />
        </View>
    );
}

function ModalAmericasScreen ({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "transparent",
                position: "relative",
            }}
        >
            <Feather
                style={{
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: 15,
                    left: 10,
                    zIndex: 10,
                }}
                name="arrow-left"
                size={24}
                color={"#434343"}
                onPress={() => navigation.goBack()}
            />
            <Americas />
        </View>
    );
}

function ModalAsiaScreen ({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "transparent",
                position: "relative",
            }}
        >
            <Feather
                style={{
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: 15,
                    left: 10,
                    zIndex: 10,
                }}
                name="arrow-left"
                size={24}
                color={"#434343"}
                onPress={() => navigation.goBack()}
            />
            <Asia />
        </View>
    );
}

function ModalEuropeScreen ({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "transparent",
                position: "relative",
            }}
        >
            <Feather
                style={{
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: 15,
                    left: 10,
                    zIndex: 10,
                }}
                name="arrow-left"
                size={24}
                color={"#434343"}
                onPress={() => navigation.goBack()}
            />
            <Europe />
        </View>
    );
}

function ModalOceaniaScreen ({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "transparent",
                position: "relative",
            }}
        >
            <Feather
                style={{
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: 15,
                    left: 10,
                    zIndex: 10,
                }}
                name="arrow-left"
                size={24}
                color={"#434343"}
                onPress={() => navigation.goBack()}
            />
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