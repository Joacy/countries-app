import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import Africa from './pages/Africa';
import Americas from './pages/Americas';
import Asia from './pages/Asia';
import Europe from './pages/Europe';
import Oceania from './pages/Oceania';

function Header ({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 15,
            }}
        >
            <TouchableOpacity
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "flex-end",
                    width: 36,
                    height: 36,
                    backgroundColor: "#232323",
                    borderRadius: 4,
                }}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Feather
                    name="menu"
                    size={28}
                    color="white"
                />
            </TouchableOpacity>
        </View>
    );
}

const Drawer = createDrawerNavigator();

function Menu () {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Header" component={Header} />
            <Drawer.Screen name="Africa" component={Africa} />
            <Drawer.Screen name="Americas" component={Americas} />
            <Drawer.Screen name="Asia" component={Asia} />
            <Drawer.Screen name="Europe" component={Europe} />
            <Drawer.Screen name="Oceania" component={Oceania} />
        </Drawer.Navigator>
    );
}

export default function Routes () {
    return (
        <NavigationContainer>
            <Menu />
        </NavigationContainer>
    );
}
