import { Dimensions } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const screenHeight = Dimensions.get('screen').height
export const screenWidth = Dimensions.get('screen').width

export const emptyStyles = createStyleSheet(() => ({
    container:(isLive:boolean = false) => ({
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isLive ? '#000' : '#fff'
    }),
    emptyImage: {
        width: screenWidth * 0.9,
        height: screenHeight * 0.4,
        resizeMode:'contain'
    }
}))