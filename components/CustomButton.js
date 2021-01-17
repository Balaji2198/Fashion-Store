import React from 'react';
import {
	StyleSheet,
	View,
    Button,
} from 'react-native';

const CustomButton = (props) => {
    return (
        <View style={styles.buttonShop}>
            <Button color='#ff902b' title= {props.data}/>
        </View>
    );
}
export default CustomButton;

const styles = StyleSheet.create({
    buttonShop: {
        width: 108,
        height: 24,
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: 6,
    }
})