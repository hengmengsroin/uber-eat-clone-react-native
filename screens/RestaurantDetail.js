import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import About from '../components/restaurant/About'
import MenuItemList from '../components/restaurant/MenuItem'

export default function RestaurantDetail() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <About></About>
            <Divider width={1.5} style={{ marginTop: 15 }}></Divider>
            <MenuItemList></MenuItemList>
        </ScrollView>
    )
}
