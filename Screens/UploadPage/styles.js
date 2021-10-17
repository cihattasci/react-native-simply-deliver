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
        flexDirection: 'row'
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
    modalContainer: {
        bottom: 0, 
        justifyContent: 'flex-end', 
        margin: 0
    },
    preview: {
        flex: 5,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      modalView: {
        height: height,
        width: width,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: 'black',
      },
      captureContainer: {
        width: Dimensions.get('window').width,
        height:
          Platform.OS === 'ios'
            ? Dimensions.get('window').height * 0.08
            : Dimensions.get('window').height * 0.125,
        alignItems: 'center',
        marginBottom: Dimensions.get('window').height * 0.04,
        paddingTop: Dimensions.get('window').height * 0.01,
      },
      takePictureButton: {
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').width * 0.18,
        borderRadius: Dimensions.get('window').width * 0.09,
        backgroundColor: 'white',
        borderWidth: Dimensions.get('window').width * 0.014,
        borderColor: 'gray',
        marginBottom: Dimensions.get('window').height * 0.01,
      },
      imagesContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.5,
      },
      image: {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').height * 0.05,
        marginRight: Dimensions.get('window').width * 0.015,
      },
      closeContainer: {
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      },
      clearText: {
        fontSize: Dimensions.get('window').width * 0.045,
        color: 'white',
        fontWeight: 'bold',
      },
      clearTextContainer: {
        marginRight: Dimensions.get('window').width * 0.03,
      },
      counter: {
        fontSize: Dimensions.get('window').width * 0.05,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: Dimensions.get('window').width * 0.1,
      },
})