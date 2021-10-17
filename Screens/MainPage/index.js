import React, { Component } from 'react'
import { Text, SafeAreaView, View, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
import {styles} from './styles';
import { Icon } from 'react-native-elements';

export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sessions: [{name: 'index - 1'},{name: 'index - 2'},{name: 'index - 3'}]
    }
  }

  goToUploadPage = () => {
    this.props.navigation.navigate('UploadPage')
  }

  editSession = (session) => {
    this.props.navigation.navigate('UploadPage', {session})
  };

  renderSessions = (session) => {
    return(
      <View style={styles.sessionItemContainer}>
        <View style={styles.infoContainer}>
          <Text>{session.name}</Text>
        </View>
        <View style={styles.editContainer}>
          <TouchableWithoutFeedback onPress={() => this.editSession(session)}>
            <Icon
              name='edit'
              type='entypo'
              color='black'
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.sessionContainer}>
          <FlatList
            data={this.state.sessions}
            renderItem={({item}) => this.renderSessions(item)}
            ListEmptyComponent = {() => {
              return(
                <View style={styles.emptySessionsContainer}>
                  <Text style={styles.emptySessionsText}>
                    No Session Yet
                  </Text>
                </View>
              )
            }}
          />
        </View>
        <View style={styles.bottomPartContainer}>
          <TouchableOpacity onPress={this.goToUploadPage}>
            <View style={styles.buttonContainer}>
              <Text style={styles.textContainer}>
                Create Session
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}