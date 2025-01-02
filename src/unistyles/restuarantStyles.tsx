import { createStyleSheet } from "react-native-unistyles";
import { Dimensions, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const screenHeight = Dimensions.get('screen').height
export const screenWidth = Dimensions.get('screen').width

export const restaurantStyles = createStyleSheet(() => ({
    listContainer: {
        paddingBottom: 300
    },
    shadowBottom: {
        shadowOffset: { width: 1, height: 18 },
        shadowOpacity: 0.08,
        elevation: 5,
        shadowRadius: 10,
        shadowColor: '#18171C',
        backgroundColor: '#fff',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 25,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        elevation: 5,
        shadowRadius: 10,
        shadowColor: '#18171C',
        margin: 10
    },
    image: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        width: '100%',
        height: screenHeight * 0.30,
        resizeMode: 'cover',
    },
    info: {
        padding: 10,
    },
    name: {
        marginBottom: 5,
    },
    details: {
        opacity: 0.7
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textPart: {
        width: '70%'
    },
    backToTopButton: {
        position: 'absolute',
        alignSelf: 'center',
        top: screenHeight * 0.055,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        zIndex: 999,
    },
}))

export const shadowStyle = {
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 16 },
    shadowOpacity: 0.4,
    elevation: 5,
    shadowRadius: 6,
    shadowColor: '#E5E9EF',
}

export const restaurantHeaderStyles = createStyleSheet(() => ({
    headerContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 5,
        ...shadowStyle
    },
    flexRowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        opacity: 0.5
    },
    sortingContainer: {
        paddingVertical: 2,
        zIndex: 2,
        ...shadowStyle
    },
    mainPadding: {
        paddingHorizontal: 10,
    },
    scrollContainer: {
        backgroundColor: '#fff',
        paddingBottom: 100
    }
}))


export const searchStyles = createStyleSheet(() => ({
    container: {
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: -4 },
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 5,
        bottom: Platform.OS == 'android' ? 22 : 0,
        zIndex: 22,
        shadowColor: '#2D2D2D',
    },
    searchInputContainer: {
        backgroundColor: '#F3F4F7',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        elevation: 5,
        shadowRadius: 14,
        shadowColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 12,
        width: '72%',
        borderWidth: 0.6,
        borderColor: '#F4F4F2',
        paddingHorizontal: 10,
    },
    textContainer: {
        width: '80%',
        paddingLeft: 10,
        height: 48
    },
    flexRowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 20
    },
    padding: {
        padding: 10
    },
    rollingText: {
        opacity: 0.6,
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#2D2D2D',
        borderRadius: 12,
        height: 48,
    },
    offerContainer: {
        padding: 15,
        paddingBottom: Platform.OS == 'ios' ? 25 : 15,
        paddingHorizontal: 20,
        overflow: 'hidden'
    },
    offerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    offerText: {
        color: '#fff',
        fontSize: RFValue(12),
        fontFamily: 'Okra-Bold',
        marginRight: 5,
        textAlign: 'center',
    },
    offerSubtitle: {
        color: '#fff',
        fontSize: RFValue(10),
        fontFamily: 'Okra-Medium',
        textAlign: 'center',
        marginTop: 5,
    },
    animatedCount: {
        fontSize: RFValue(12),
        color: 'white',
        fontFamily: 'Okra-Bold',
        margin: 0,
    },
    confetti: {
        width: '100%',
        height: 400,
        position: 'absolute'
    }
}))