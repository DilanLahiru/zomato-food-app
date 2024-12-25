import { Dimensions } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const screenHeight = Dimensions.get('screen').height
export const screenWidth = Dimensions.get('screen').width

export const splashStyles = createStyleSheet(({ colors, device }) => ({
    container: {
        flex: 1,
        backgroundColor: '#E23744',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: screenWidth * 0.6,
        height: screenHeight * 0.4,
        resizeMode: 'contain',
        marginTop: 80,
    },
    treeImage: {
        width: screenWidth * 0.6,
        height: screenHeight * 0.18,
        resizeMode: 'contain',
    },
    msgText: {
        textAlign: "center",
    },
    animatedContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40
    }
}))

export const loginStyles = createStyleSheet(({ colors, device, border }) => ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cover: {
        width: '100%',
        height: screenHeight * 0.4,
        resizeMode: 'cover',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    bottomContainer: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    title: {
        textAlign: 'center',
        marginHorizontal: 20
    },
    breakerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        overflow: "hidden",
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
    },
    horizontalLine: {
        height: 1,
        width: '100%',
        position: 'absolute',
        backgroundColor: '#E5E9EF',
        zIndex: -1
    },
    breakerText: {
        opacity: 0.8,
        backgroundColor: '#fff',
        //paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#E23744',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 45,
        marginVertical: 5,
        borderRadius: 10,
    },
    footer: {
        position: "absolute",
        bottom: screenHeight * 0.02,
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerTextContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginTop:5
    },
    footerText: {
        textDecorationLine: 'underline',
        fontSize: 10
    },

}))