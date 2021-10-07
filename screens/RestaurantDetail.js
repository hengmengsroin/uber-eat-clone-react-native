import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import About from '../components/restaurant/About'
import MenuItemList from '../components/restaurant/MenuItem'
import ViewCart from '../components/restaurant/ViewCart'

export default function RestaurantDetail({ route, navigation }) {
    let restaurant = route.params.restaurant;
    return (
        <View style={{ height: '100%' }}>
            <About restaurant={restaurant}></About>
            <Divider width={1.5} style={{ marginTop: 15 }}></Divider>
            <MenuItemList restaurantName={restaurant.name}></MenuItemList>
            <ViewCart navigation={navigation} restaurantName={restaurant.name} />
        </View>
    )
}
