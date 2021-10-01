import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BottomBar from '../components/home/BottomBar'
import Category from '../components/home/Category'
import HeaderTab from '../components/home/HeaderTab'
import RestaurantList, { localRes } from '../components/home/RestaurantList'
import SearchBar from '../components/home/SearchBar'

const YELP_API_KEY = "";

const getRestaurantData = () => {

}

export default function Home({ navigation }) {
    const [activeMenu, setActiveMenu] = useState('Home')
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 16 }}>
                <HeaderTab activeTab={activeTab}
                    setActiveTab={setActiveTab}></HeaderTab>
                <SearchBar></SearchBar>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <Category></Category>
                <RestaurantList restaurantData={localRes} navigation={navigation}></RestaurantList>
            </ScrollView>
            <Divider></Divider>
            <BottomBar activeMenu={activeMenu} setActiveMenu={setActiveMenu}></BottomBar>
        </SafeAreaView>
    )
}
