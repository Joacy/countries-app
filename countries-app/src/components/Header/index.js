import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';

// import { Container } from './styles';

const Header = ({ navigation }) => {
    return (
        <View
            style={{
                flexDirection: "row",
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

export default Header;