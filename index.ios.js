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
		this.state = {
			navigationBarIsHidden: true
		}
		this.bindContext();
	}

	bindContext() {
		this.toggleNavBar = this.toggleNavBar.bind(this);
	}

	componentDidMount(){
		console.log('INDEX DID MOUNT');
	}

	toggleNavBar(navigationBarIsHidden) {
		console.log('toggle nav bar called', navigationBarIsHidden);
		let state = this.state;
		state.navigationBarIsHidden = navigationBarIsHidden;
		this.setState(state);
		console.log(this.state.navigationBarIsHidden)
	}

  render() {
    return (
			<ReactNative.NavigatorIOS
				style={styles.container}
				navigationBarHidden={this.state.navigationBarIsHidden}
				initialRoute={{
					title: 'Camera',
					component: CameraView,
					passProps: {toggleNavBar: this.toggleNavBar}
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
