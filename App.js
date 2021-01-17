import React, { useState } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	ScrollView,
	StatusBar,
} from 'react-native';

import TopBar from './components/TopBar';
import Banner from './components/Banner';
import TrendingProducts from './components/TrendingProducts';
import ShopByPattern from './components/ShopByPattern';
import TopBrands from './components/TopBrands';
import KnockOutDeals from './components/KnockOutDeals';

export default class App extends React.Component {

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar backgroundColor="#4c102b" />
				<TopBar />

				<ScrollView>
					{/* Discount Background Image */}
					<Banner />
					{/* Shop By Pattern  */}
					<ShopByPattern data="2"/>
					{/* Trending Products */}
					<TrendingProducts />
					{/* Top Brands  */}
					<TopBrands data="3"/>
					{/* Listing the Knock-Out Deals */}
					<KnockOutDeals />
				</ScrollView>

			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	scrollview: {
		flexGrow: 1,
	},
});
