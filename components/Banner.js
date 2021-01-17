import React from 'react';
import {
	StyleSheet,
	View,
    ImageBackground,
    Text,
    Dimensions,
} from 'react-native';

const window = Dimensions.get('window')

const Banner = (props) => {
    return (
        <ImageBackground  source={require('../assets/discount.png')} style={ styles.banner } >
            <View style = {styles.discountTextAlign}>
                <Text style = {[styles.discountText, {fontSize: 32}]}>
                    Upto 
                </Text>	
                <Text style = {[styles.discountText, styles.bold, {fontSize: 40}]}>
                    25% 
                    <Text style={{fontSize: 32}}> Off</Text>
                </Text>
            </View>
        </ImageBackground>
    );
}
export default Banner;

const styles = StyleSheet.create({
    bold: {
		fontWeight: "bold",
	},
    banner: {
		width: window.width,
		height: 300,
		borderRadius: 20,
	},
	discountTextAlign: {
		marginTop: 100,
		marginLeft: window.width-185,
	},
	discountText: {
		letterSpacing : 1.5,
		color: '#ffffff',
	},
})