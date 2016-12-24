import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	TouchableHighlight,
	View,
	Text
} from 'react-native';

export default class NavBar extends Component {

	static propTypes = {
		navigator: PropTypes.object.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		buttonColor: PropTypes.string.isRequired,
		buttonTextColor: PropTypes.string.isRequired,
		leftButtonText: PropTypes.string.isRequired,
		rightButtonText: PropTypes.string,
		title: PropTypes.string,
		titleColor: PropTypes.string
	}

	constructor(props) {
		super(props);
		this.bindContext();
	}

	bindContext(){
		this.onLeftButtonPress = this._onLeftButtonPress.bind(this);
	}

	_onLeftButtonPress(){
		this.props.navigator.pop();
	}

	_leftButtonStyle() {
		return {
			left: 0,
			padding: 5,
			marginLeft: 5,
			marginTop: 25,
			height: 30,
			borderColor: this.props.buttonColor ? this.props.buttonColor : 'blue',
			borderWidth: 1,
			borderRadius: 5
		};
	}

	_rightButtonStyle() {
		return {
			right: 0,
			padding: 5,
			marginLeft: 5,
			marginTop: 25,
			height: 30,
			borderColor: this.props.buttonColor ? this.props.buttonColor : 'blue',
			borderWidth: 1,
			borderRadius: 5
		};
	}

	_buttonTextStyle() {
		return {
			color: this.props.buttonTextColor ? this.props.buttonTextColor : 'blue'
		}
	}

	_titleStyle() {
		return {
			color: this.props.titleColor ? this.props.titleColor : 'blue'
		};
	}

	render() {
		return (
			<View style={styles.navBar}>
				<TouchableHighlight style={this._leftButtonStyle()} onPress={this.onLeftButtonPress}>
					<Text style={this._buttonTextStyle()}>{this.props.leftButtonText}</Text>
				</TouchableHighlight>
				{ this.props.title &&
					<View style={styles.titleContainer}>
						<Text style={this._titleStyle()}>{this.props.title}</Text>
					</View>
				}
				{ this.props.rightButtonText &&
					<TouchableHighlight style={styles.rightButton} onPress={this.props.rightButtonCallBack}>
						<Text style={this._buttonTextStyle()}>{this.props.rightButtonText}</Text>
					</TouchableHighlight>
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	navBar: {
		backgroundColor: 'lightgrey',
		height: 60,
		flexDirection: 'row',
		top: 0,
		right: 0,
		left: 0
	},
	titleContainer: {
		alignItems: 'center'
	}
})
