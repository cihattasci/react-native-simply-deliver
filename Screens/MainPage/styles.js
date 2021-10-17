import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get("screen");

export const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    sessionContainer: {
        flex: 5,
    },
    bottomPartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: width*0.32,
        height: height*0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black'
    },
    textContainer: {
        color: 'black',
    },
    emptySessionsContainer: {
        height: height*0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptySessionsText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: width * 0.05,
    },
    sessionItemContainer: {
        flexDirection: 'row',
        width: width,
        height: height*0.05,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',

    },
    infoContainer: {
        flex: 4,
        justifyContent: 'center',
        paddingLeft: 20
    },
    editContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
})