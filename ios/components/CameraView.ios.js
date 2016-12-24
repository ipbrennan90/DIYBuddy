'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
	TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';
import ProjectView from './ProjectView.ios.js'

export default class CameraView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cameraType: Camera.constants.Type.back
		}
		this.bindContext()
	}

	componentDidMount() {

	}

	bindContext() {
		this.takePicture = this._takePicture.bind(this);
		this.switchCamera = this._switchCamera.bind(this);
		this.toProject = this._toProject.bind(this);
	}

	_takePicture() {
		this.camera.capture()
			.then((data) => log.debug(data))
			.catch(err => log.warn(err))
	}

	_switchCamera() {
		let state = this.state;
		state.cameraType = state.cameraType === Camera.constants.Type.back ? Camera.constants.Type.front : Camera.constants.Type.back;
		this.setState(state);
	}

	_toProject() {
		this.props.navigator.push({
			title: 'Project',
			component: ProjectView,
			passProps: {}
		});
	}
  render() {
		let cameraTypeText = this.state.cameraType === Camera.constants.Type.back ? 'Back' : 'Selfie'
    return (
			<Camera
				ref={(cam) => {this.camera = cam;}}
				style={styles.container}
				aspect={Camera.constants.Aspect.fit}
				type={this.state.cameraType}>
				<View style={styles.buttonBar}>
					<TouchableHighlight style={styles.button} onPress={this.switchCamera}>
						<Text style={styles.buttonText}>{cameraTypeText}</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.button} onPress={this.takePicture}>
						<Text style={styles.buttonText}>Take</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.button} onPress={this.toProject}>
						<Text style={styles.buttonText}>Project</Text>
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
		margin: 5,
		borderRadius: 5
	},
	buttonText: {
		color: '#FFFFFF'
	}
});
