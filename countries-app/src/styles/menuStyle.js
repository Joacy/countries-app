import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        backgroundColor: "#04052E",
    },

    button: {
        marginVertical: 5,
        paddingVertical: 7,
        paddingHorizontal: 15,
        backgroundColor: "#22007C",
        width: "100%", borderRadius: 4,
        borderColor: "#E1D6FF",
        borderWidth: 2,
    },

    buttonText: {
        color: "#E1D6FF",
        textAlign: "center",
        fontWeight: "bold",
    },

    modalRegion: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingTop: 0,
        backgroundColor: "#04052E",
    },

    arrowView: {
        alignItems: "flex-start",
        justifyContent: "center",
        height: 42,
        width: 42,
    },
});