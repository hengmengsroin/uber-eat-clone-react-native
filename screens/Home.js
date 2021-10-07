import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, ToastAndroid } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { ToastProvider, useToast } from "react-native-toast-notifications";
import BottomBar from '../components/home/BottomBar'
import Category from '../components/home/Category'
import HeaderTab from '../components/home/HeaderTab'
import RestaurantList, { localRes } from '../components/home/RestaurantList'
import SearchBar from '../components/home/SearchBar'

const YELP_API_KEY = "5DMYmsaOz14eZKQa51lYKjptGCfOLumTor8ebeToavSfNnLYc886mz3Q-TXxmMzxeAtDuqVR6bjVYA9JhrA1XtB7BJPKipnKfhqMnYCDLxwVjyhWoOaBgZ3YsBRZYXYx";

export default function Home({ navigation }) {
    const [activeMenu, setActiveMenu] = useState('Home')
    const [activeTab, setActiveTab] = useState("Delivery")
    const [restaurantData, setRestaurantData] = useState(localRes)
    const [location, setLocation] = useState("SanDiego")
    const toast = useToast()

    const getRestaurantDataFromYelp = () => {
        const url = "https://api.yelp.com/v3/businesses/search?term=restuarants&location=" + location
        fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        }).then((response) => response.json())
            .then(data => {

                if (!data.error) {
                    // console.log(data.businesses[0]);
                    setRestaurantData(data.businesses.filter((item) => item.transactions.includes(activeTab.toLowerCase())))
                } else {
                    console.log(data.error);
                    toast.show(data.error.description, { placement: 'bottom' })
                }
            })
    }
    useEffect(() => {
        getRestaurantDataFromYelp()
        // toast.show("hello")
    }, [location, activeTab])

    return (

        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 16 }}>
                <HeaderTab activeTab={activeTab}
                    setActiveTab={setActiveTab}></HeaderTab>
                <SearchBar setLocation={setLocation}></SearchBar>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <Category></Category>
                <RestaurantList restaurantData={restaurantData} navigation={navigation}></RestaurantList>
            </ScrollView>
            <Divider></Divider>
            <BottomBar activeMenu={activeMenu} setActiveMenu={setActiveMenu}></BottomBar>
        </SafeAreaView>
    )
}
