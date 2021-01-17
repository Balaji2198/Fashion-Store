import React from 'react';
import {
	StyleSheet,
	View,
	TextInput,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const TopBar = (props) => {
    return (
        <View style={ styles.inputContainer }>
            <Ionicons name="arrow-back" size={32} color="#ffffff" /> 	
            <TextInput
                style={ styles.input }
                placeholder='Kurti Store'
                placeholderTextColor='#fff'
                value={ props.text }
                underlineColorAndroid ='transparent'
                
            />
            <Ionicons name="search" size={25} color="#ffffff" style={{ marginRight: 24 }} /> 
         </View>
    );
}
export default TopBar;

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		backgroundColor: '#4c102b',
		borderColor: '#4c102b',
		borderWidth: 0.5,
		height: 35,
		borderRadius: 4,
		alignSelf: 'stretch',
	},
	input: {
		flex: 1,
		color: '#ffffff',
		fontSize: 20,
		marginLeft: 24
	},
})