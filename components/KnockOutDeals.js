import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';

import SectionHeader from './SectionHeader';
import KnockOutDealsImage from './KnockOutDealsImage';

const KnockOutDeals = (props) => {
    return (
        <View style={styles.alignCenter}>
            <SectionHeader headingText="Knock-out deals"
                headerTop={styles.headerTop}
                horizontalLineWidth={styles.horizontalLineWidth}
            />
            <View style={styles.rowAlign}>
                <KnockOutDealsImage discountAmount="Rs.299"/>
                <KnockOutDealsImage discountAmount="Rs.499"/>
                <KnockOutDealsImage discountAmount="Rs.999"/>
            </View>
        </View>
    );
}
export default KnockOutDeals;

const styles = StyleSheet.create({
    alignCenter: {
		alignItems: 'center',
    }, 
    headerTop: {
        marginTop: 30,
    },
    horizontalLineWidth: {
        width: 150,
    },
    rowAlign: {
        flexDirection: 'row'
    },
})