import React from 'react';
import {
	StyleSheet,
	Text,
	View,
    ImageBackground,
} from 'react-native';

const KnockOutDealsImage = (props) => {
    return (
        <ImageBackground  source={require('../assets/deals-card.png')} style={styles.alignImage} >
            <View style = {styles.discountTextAlign}>
                <Text style = {[styles.discountText, {fontSize: 16, opacity: 0.7}]}>
                    Under
                </Text>	
                <Text style = {[styles.discountText, styles.bold, {fontSize: 22}]}>
                    {props.discountAmount}
                </Text>
                <Text style = {[styles.discountText, {fontSize: 12, opacity: 0.7}]}>
                    OFF
                </Text>	
            </View>
        </ImageBackground>
    );
}
export default KnockOutDealsImage;

const styles = StyleSheet.create({
    bold: {
		fontWeight: "bold",
    },
    alignImage: {
        width: 104,
        height: 193,
        marginLeft: 19,
        marginTop: 15,
    },
    discountTextAlign: {
        marginTop: 63,
        alignItems: 'center'
	},
    discountText: {
		letterSpacing : 0.72,
        color: '#ffffff',
        fontStyle: 'italic',
    },
})