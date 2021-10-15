import React, { Component } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import {styles} from './styles'

export default class index extends Component {

  addPhoto = () => {
    alert('d')
  };

  completeSession = () => {
    alert('d')
  };

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Uploaded Documents
          </Text>
        </View>
        <View style={styles.photos}>

        </View>
        <View style={styles.addPhotoContainer}>
          <TouchableOpacity onPress={this.addPhoto}>
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
      </SafeAreaView>
    )
  }
}