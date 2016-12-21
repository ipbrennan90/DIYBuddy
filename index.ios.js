/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import ReactNative, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	TouchableHighlight
} from 'react-native';
import CameraView from './ios/components/CameraView.ios.js'
export default class DIYBuddy extends Component {

	constructor(props) {
		super(props);
		this.bindContext()

	}

	bindContext() {
	}

  render() {
    return (
			<ReactNative.NavigatorIOS
				style={styles.container}
				initialRoute={{
					title: 'Camera',
					component: CameraView
				}}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	}
});

AppRegistry.registerComponent('DIYBuddy', () => DIYBuddy);
