import React from 'react';
import {
	StyleSheet,
	View,
    FlatList,
} from 'react-native';

import ImageWithDescription from './ImageWithDescription';
import SectionHeader from './SectionHeader';

const images = [
    {image: require("../assets/anarkali.png"), description: '7 Seasons', key: '1'},
    {image: require("../assets/anarkali.png"), description: 'Ajmera Fashion', key: '2'},
    {image: require("../assets/anarkali.png"), description: 'Kinjovilla Fashion', key: '3'},
    {image: require("../assets/anarkali.png"), description: 'Meet Fashion', key: '4'},
    {image: require("../assets/anarkali.png"), description: 'Radhika Fashion', key: '5'},
    {image: require("../assets/anarkali.png"), description: 'Mannat Fashion', key: '6'},
    {image: require("../assets/anarkali.png"), description: 'D to D Life Style', key: '7'},
    {image: require("../assets/anarkali.png"), description: 'AD Collection', key: '8'},
    {image: require("../assets/anarkali.png"), description: 'Mela', key: '9'},
]

const TopBrands = (props) => {
    return (
            <View style={styles.alignCenter}>
                <SectionHeader headingText="Top Brands" 
                    headerTop={styles.headerTop}
                    horizontalLineWidth={styles.horizontalLineWidth}
                />
                <FlatList
                data={images}
                numColumns= {props.data}
                renderItem={({ item }) => (
                    <View>
                        <ImageWithDescription 
                        data = {item}
                        imageStyle={styles.TopBrandsImage}
                        imageDescriptionStyle={styles.TopBrandsImageDescription}
                        />
                    </View>
                )}
                />
            </View>
    );
}
export default TopBrands;

const styles = StyleSheet.create({
	alignCenter: {
		alignItems: 'center',
    },
    headerTop: {
        marginTop: 20,
    },
    horizontalLineWidth: {
        width: 105,
    },
	TopBrandsImage: {
		width: 98,
		height: 98,
		borderRadius: 12,
		padding: 10,
		marginTop: 25,
		marginHorizontal: 17,
	},
	TopBrandsImageDescription: {
		color: '#778299',
		fontSize: 12,
        alignSelf: 'center',
    },
})