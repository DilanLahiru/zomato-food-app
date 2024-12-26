import { RFValue } from "react-native-responsive-fontsize";
import { createStyleSheet } from "react-native-unistyles";
import { BOTTOM_TAB_HEIGHT } from "./Constants";
import { Dimensions } from "react-native";

export const screenHeight = Dimensions.get('screen').height
export const screenWidth = Dimensions.get('screen').width

export const tabStyles = createStyleSheet(({ colors, fonts, device }) => ({
    tabContainer: {
        width: screenWidth * 0.82,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15
    },
    tabBarContainer: {
        width: '100%',
        position: 'absolute',
        height: BOTTOM_TAB_HEIGHT,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 11,
        shadowColor: '#000',
        bottom: 0,
        zIndex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    verticalLine: {
        marginHorizontal: 10,
        height: '60%',
        width: 1,
        position: "absolute",
        left: '55%',
        borderRadius: 20,
        opacity: 0.2,
        backgroundColor: '#9197A6'
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    focusedTabItem: {
        borderBottomWidth: 2,
        borderBottomColor: '#E23744',
    },
    slidingIndicator: {
        position: 'absolute',
        top: 0,
        height: 3,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        width: '15%',
    },
    blinkitLogoContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '12%',
        overflow: 'hidden',
        backgroundColor: '#F7CB46',
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    blinkitLogo: {
        width: '100%',
        height: 26,
        resizeMode: 'contain',
    },
    tabLabel: {
        fontFamily: 'Okra-Medium',
        fontSize: RFValue(10),
        color: '#B3B3B3',
    },
    focusedTabLabel: {
        color: '#fff',
    },
}))