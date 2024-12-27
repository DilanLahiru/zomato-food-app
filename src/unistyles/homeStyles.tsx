import { RFValue } from "react-native-responsive-fontsize";
import { createStyleSheet } from "react-native-unistyles";
import { isBannerHeight } from "./Constants";
import { Dimensions, Platform } from "react-native";

export const screenHeight = Dimensions.get('screen').height
export const screenWidth = Dimensions.get('screen').width

export const homeStyles = createStyleSheet(({ colors, device, border }) => ({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topHidingContainer: {
        marginTop: isBannerHeight,
        backgroundColor: '#fff',
    },
    topHeader: {
        zIndex: 1,
        alignSelf: 'center',
        paddingHorizontal: 10,
    },
    animatedText: {
        fontSize: RFValue(10.5),
        fontFamily: 'Okra-Bold'
    },
    animatedSubText: {
        fontSize: RFValue(7),
        lineHeight: 9,
        fontFamily: 'Okra-Bold'
    },
    exploreContainer: {
        marginVertical: 10,
    },
    lottieContainer: {
        width: screenWidth,
        backgroundColor: '#CC152D',
        height: Platform.OS === 'android' ? screenHeight * 0.54 : screenHeight * 0.6,
        justifyContent: "flex-end",
        position: "absolute",
        zIndex: -3,
        alignSelf: 'center'
    },
    lottie: {
        width: '100%',
        bottom: -1,
        height: screenWidth,
    },
    rollingText: {
        opacity: 0.6,
    },
    flexRowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS === 'android' ? 5 : 0,
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    translation: {
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    translationIcon: {
        resizeMode: 'contain',
        width: 32,
        height: 32
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 200,
        resizeMode: 'contain'
    },
    goldenCircle: {
        width: 50,
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
        height: 50,
        borderRadius: 200,
    },
    profileAvatar: {
        width: 40,
        marginHorizontal: 5,
        height: 40,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },

    vegMode: {
        width: '15%',
        top: 3,
        justifyContent: "center",
        alignItems: 'center'
    },
    switch: {
        width: 35,
        height: 35,
        resizeMode: "contain",
        bottom: 2
    },
    searchInputContainer: {
        backgroundColor: '#F3F4F7',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.7,
        elevation: 5,
        shadowRadius: 6,
        shadowColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 12,
        width: '88%',
        borderWidth: 0.6,
        borderColor: '#F4F4F2',
        paddingHorizontal: 10,
    },
    textContainer: {
        width: '80%',
        paddingLeft: 10,
        height: 48
    },
    divider: {
        width: 1,
        height: 24,
        backgroundColor: '#ddd',
        marginHorizontal: 10
    },
    padding: {
        padding: 10
    },
    flexRowCenter: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    leftTab: (isActive: boolean) => ({
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: isActive ? '#F4F4F2' : '#fff',
        borderWidth: 1,
        borderColor: isActive ? '#019A51' : '#E5E9EF',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    }),
    rightTab: (isActive: boolean) => ({
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: isActive ? '#F4F4F2' : '#fff',
        borderWidth: 1,
        borderColor: isActive ? '#019A51' : '#E5E9EF',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    }),

}))