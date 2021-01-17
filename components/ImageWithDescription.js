import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';

const ImageWithDescription = (props) => {
    return (
        <View>
            <Image style={ props.imageStyle } source={props.data.image} />
            <Text style={[ props.imageDescriptionStyle, styles.bold]}>{props.data.description} </Text>
        </View> 
    );
}
export default ImageWithDescription;

const styles = StyleSheet.create({
    bold: {
		fontWeight: "bold",
	},
})