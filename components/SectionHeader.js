import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

const SectionHeader = (props) => {
    return (
		<View style = {styles.alignSection}>
        	<Text style = {[styles.sectionHeader, styles.bold, props.headerTop]}>{props.headingText}</Text>
			<View style = {[styles.horizontalLine, props.horizontalLineWidth ]} />
		</View>
    );
}
export default SectionHeader;

const styles = StyleSheet.create({
    bold: {
		fontWeight: "bold",
	},
	horizontalLine: {
		borderBottomColor: '#f5cdab',
		borderBottomWidth: 3,
		marginTop: 5,
	},
	alignSection: {
		textAlign: 'left',
		alignSelf: 'stretch',
		marginLeft: 15,
	},
    sectionHeader: {
		color: '#e53838',
		textAlign: 'left',
		lineHeight: 22,
		fontSize: 20,
		alignSelf: 'stretch',
		marginTop: 11,
	},
})