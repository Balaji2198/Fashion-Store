import React from 'react';
import {
	StyleSheet,
	View,
    FlatList,
} from 'react-native';

import ImageWithDescription from './ImageWithDescription';
import SectionHeader from './SectionHeader';

const images = [
    {image: require("../assets/anarkali.png"), description: 'A-Line', key: '1'},
    {image: require("../assets/anarkali.png"), description: 'Anarkali', key: '2'},
    {image: require("../assets/anarkali.png"), description: 'Angrakha', key: '3'},
    {image: require("../assets/anarkali.png"), description: 'Long-straight', key: '4'},
    {image: require("../assets/anarkali.png"), description: 'Overlay', key: '5'},
    {image: require("../assets/anarkali.png"), description: 'Flatred', key: '6'},
]

const ShopByPattern = (props) => {
    return (
            <View style={styles.alignCenter}>
                <SectionHeader headingText="Shop by Pattern"
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
                        imageStyle={styles.byPatternImage}
                        imageDescriptionStyle={styles.byPatternImageDescription}
                        />
                    </View>
                )}
                />
            </View>
    );
}
export default ShopByPattern;

const styles = StyleSheet.create({
	alignCenter: {
		alignItems: 'center',
    },
    horizontalLineWidth: {
        width: 150,
    },
    byPatternImage: {
		width: 160,
		height: 152,
		borderRadius: 12,
		padding: 10,
		marginTop: 10,
		marginHorizontal: 8,
	},
	byPatternImageDescription: {
		color: '#e53838',
		fontSize: 12,
		alignSelf: 'center',
    },
})