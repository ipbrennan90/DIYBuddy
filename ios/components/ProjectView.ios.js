import React, {Component} from 'react'
import {
	TouchableHighlight,
	StyleSheet,
	Text,
	View
} from 'react-native'
import NavBar from './NavBar.ios.js'

export default class ProjectView extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.bindContext();
	}

	bindContext() {
	}

	render() {
		return (
			<View style={styles.container}>
				<NavBar navigator={this.props.navigator} backgroundColor='lightgrey' buttonColor='#FFFFFF' buttonTextColor='#FFFFFF' leftButtonText='Camera' title='Project' titleColor='#FFFFFF'/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'grey',
	},
	customNav: {
		backgroundColor: 'lightgrey',
		height: 60,
		flexDirection: 'row',
		top: 0,
		right: 0,
		left: 0
	},
	button: {
		padding: 5,
		marginLeft: 5,
		marginTop: 25,
		height: 30,
		borderColor: '#FFFFFF',
		borderWidth: 1,
		borderRadius: 5
	},
	buttonText: {
		color: '#FFFFFF'
	}
})
