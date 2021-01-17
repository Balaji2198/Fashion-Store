import React from 'react';
import {
	StyleSheet,
	Text,
    ImageBackground,
} from 'react-native';

import CustomButton from './CustomButton';

const TrendingProducts = (props) => {
    return (
        <ImageBackground style={ styles.trendingProductsImage } source={require('../assets/trending-products.png')} >
            <Text style = {styles.trendingProductsText}>Trending Products </Text>
            <CustomButton data="Shop Now"/>
            <Text style = {styles.trendingProductsDiscount}>
                Upto 
				<Text style = {{color: "#fffd99"}}> 60% </Text>
				off 
            </Text>
        </ImageBackground>
    );
}
export default TrendingProducts;

const styles = StyleSheet.create({
	trendingProductsImage: {
		width: window.width,
		height: 218,
		marginTop: 15,
	},
	trendingProductsText: {
		fontSize: 12,
		letterSpacing : 1.5,
		color: '#ffffff',
		textAlign: 'center',
		marginTop: 53,
	},
	trendingProductsDiscount: {
		textAlign: 'center',
        marginTop: 16,
        letterSpacing : 1.5,
        color: '#ffffff',
        fontSize: 24,
	},
})