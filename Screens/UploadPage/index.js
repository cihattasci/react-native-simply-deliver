import React, { Component } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, Dimensions, FlatList, Image } from 'react-native'
import {styles} from './styles'
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';
import {RNCamera} from 'react-native-camera';

export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      photoCameraArray: [],
      ImagePathArray: []
    };
    this.photosFromCamera = [];
  }

  completeSession = () => {
    this.clearCameraUrl();
    alert('d')
  };

  //camera
  cameraToggle = () => {
    this.setState({modal: !this.state.modal});
  };

  clearCameraUrl = async () => {
    this.photosFromCamera = [];
    this.setState({photoCameraArray: []});
  };

  //take a picture with using camera
  takePicture = async () => {
    const data = await this.camera.takePictureAsync();
    this.photosFromCamera.push(data.uri);
    this.setState({photoCameraArray: this.photosFromCamera});
  };

  //set camera url to upload info url
  uploadPhotoUrlFromCamera = async () => {
    this.setState({ImagePathArray: this.state.photoCameraArray});
  };

  renderImage = (item, index) => {
    return(
      <View>
        <Image style={{width:50, height:50}} source={this.state.ImagePathArray[index]}/>
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Uploaded Documents
          </Text>
        </View>
        <View style={styles.photos}>
          <FlatList
            horizontal
            data={this.state.ImagePathArray}
            render={({item}, index) => this.renderImage(item, index)}
            ListEmptyComponent={() => {
              return (
                <View>

                </View>
              )
            }}
          />
        </View>
        <View style={styles.addPhotoContainer}>
          <TouchableOpacity onPress={this.cameraToggle}>
            <View style={styles.addPhoto}>
              <Text style={styles.photoText}>
                + Add Photo
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomPartContainer}>
          <TouchableOpacity onPress={this.completeSession}>
            <View style={styles.buttonContainer}>
              <Text style={styles.textContainer}>
                Complete Session
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Modal
            style={styles.modalContainer}
            onBackdropPress={() => this.setState({modal: false})}
            onModalHide={this.uploadPhotoUrlFromCamera}
            isVisible={this.state.modal}>
            <SafeAreaView style={styles.modalView}>
              <View style={styles.closeContainer}>
                <TouchableOpacity
                  style={{marginLeft: Dimensions.get('window').width * 0.03}}
                  onPress={this.cameraToggle}>
                  <Icon
                    name="close"
                    color="white"
                    type='ionicon'
                    size={Dimensions.get('window').width * 0.08}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.clearCameraUrl}>
                  <View style={styles.clearTextContainer}>
                    <Text style={styles.clearText}>Clear</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <RNCamera
                ref={(ref) => {
                  this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
              />
              <View style={styles.captureContainer}>
                <TouchableOpacity onPress={this.takePicture}>
                  <View style={styles.takePictureButton} />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={styles.imagesContainer}>
                    <FlatList
                      horizontal
                      data={this.state.photoCameraArray}
                      renderItem={({item}) => (
                        <Image style={styles.image} source={{uri: item}} />
                      )}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </View>
                  <Text style={styles.counter}>
                    {this.photosFromCamera.length}
                  </Text>
                </View>
              </View>
            </SafeAreaView>
          </Modal>
      </SafeAreaView>
    )
  }
}