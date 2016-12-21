'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';

export default class CameraView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cameraType: Camera.constants.Type.back
		}
		this.bindContext()

	}

	bindContext() {
		this.takePicture = this._takePicture.bind(this);
		this.switchCamera = this._switchCamera.bind(this);
	}

	_takePicture() {
		this.camera.capture()
			.then((data) => console.log(data))
			.catch(err => console.error(err))
	}

	_switchCamera() {
		let state = this.state;
		state.cameraType = state.cameraType === Camera.constants.Type.back ? Camera.constants.Type.front : Camera.constants.Type.back;
		this.setState(state);
	}
  render() {
    return (
			<Camera
				ref={(cam) => {this.camera = cam;}}
				style={styles.container}
				aspect={Camera.constants.Aspect.fit}
				type={this.state.cameraType}>
				<View style={styles.buttonBar}>
					<TouchableHighlight style={styles.button} onPress={this.switchCamera}>
						<Text style={styles.buttonText}>Flip</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.button} onPress={this.takePicture}>
						<Text style={styles.buttonText}>Take</Text>
					</TouchableHighlight>
				</View>
			</Camera>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonBar: {
		flexDirection: 'row',
		position: 'absolute',
		bottom: 25,
		right: 0,
		left: 0,
		justifyContent: 'center'
	},
  button: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#FFFFFF',
		margin: 5
	},
	buttonText: {
		color: '#FFFFFF'
	}
});
