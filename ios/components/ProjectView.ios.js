import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View
} from 'react-native'

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
			<View style= {styles.container}>
				<Text>PROJECT PAGE</Text>
			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: 'grey',
		justifyContent: 'center',
		alignItems: 'center'
	}
}
