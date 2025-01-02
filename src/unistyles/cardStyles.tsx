import { Dimensions } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const screenHeight = Dimensions.get('screen').height
export const screenWidth = Dimensions.get('screen').width

export const cardStyles = createStyleSheet(() => ({
    recommendedContainer: {
        marginTop: 25,
        paddingLeft:10
    },
    mainPadding: {
        padding: 10
    },
    regularFoodContainer: {
        marginVertical: 10,
    },
    listContainer: {
        paddingHorizontal: 15,
    },
    itemContainer: {
        marginRight: 15,
        width: screenWidth * 0.3,
        overflow: 'hidden',
        marginBottom: 15,
    },
    regularFoodImage: {
        width: screenWidth * 0.28,
        height: screenWidth * 0.28,
        resizeMode: 'cover'
    },
    bookmarkIcon: {
        position: 'absolute',
        zIndex: 2,
        top: 5,
        right: 5,
    },
    bookmarkIconImage: {
        width: 15,
        height: 18,
        resizeMode: 'contain'
    },
    itemImage: {
        width: '100%',
        height: 100,
    },
    discountContainer: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        zIndex: 2
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    clockIcon: {
        width: 14,
        height: 14,
        resizeMode: 'contain'
    },
    itemInfo: {
        marginTop: 8,
    },
    imageContainer: {
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#E5E9EF'
    },
    centerText: {
        textAlign: 'center',
        opacity: 0.4,
        marginVertical: 10,
    },

}))