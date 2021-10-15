import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get("screen");

export const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'black',
        fontSize: width*0.05
    },
    photos: {
        flex: 2,
    },
    addPhotoContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addPhoto: {
        width: width*0.8,
        height: height*0.25,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoText: {
        fontSize: width*0.05,
        color: 'black',
    },
    bottomPartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: width*0.35,
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
})