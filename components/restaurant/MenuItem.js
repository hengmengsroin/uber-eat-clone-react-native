import React, { useState } from 'react'
import { View, Text, Image, } from 'react-native'
import { Divider } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import BouncyCheckBox from "react-native-bouncy-checkbox"
import { useDispatch } from 'react-redux'

const foods = [
    {
        name: "Food Item",
        image_url: "https://food.bolt.eu/og-img.jpg",
        rating: 2.0,
        price: "20",
        description: "hello hello "
    },
    {
        name: "Food Item",
        image_url: "https://food.bolt.eu/og-img.jpg",
        rating: 2.0,
        price: "20",
        description: "hello hello"
    },
    {
        name: "Food Item",
        image_url: "https://food.bolt.eu/og-img.jpg",
        rating: 2.0,
        price: "20",
        description: "hello hello"
    },
    {
        name: "Food Item",
        image_url: "https://food.bolt.eu/og-img.jpg",
        rating: 2.0,
        price: "20",
        description: "hello hello"
    },
    {
        name: "Food Item",
        image_url: "https://food.bolt.eu/og-img.jpg",
        rating: 2.0,
        price: "20",
        description: "hello hello"
    },
    {
        name: "Food Item",
        image_url: "https://food.bolt.eu/og-img.jpg",
        rating: 2.0,
        price: "20",
        description: "hello hello"
    }
]

export default function MenuItemList({ restaurantName }) {




    const dispatch = useDispatch();
    const selectedItem = (item, checkBox) => {
        return dispatch({
            type: "AddToCart",
            payload: { ...item, restaurantName: restaurantName, checkBox }
        })
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
            {foods.map((item, index) => {
                return (<View key={index}>
                    <MenuItem food={item} selectItem={selectedItem}></MenuItem>
                    <Divider orientation width={1.3} style={{ paddingHorizontal: 15 }}></Divider>
                </View>)
            })}
        </ScrollView>
    )
}

const MenuItem = ({ food, selectItem }) => {

    return (<View style={{ flexDirection: 'row', padding: 15, paddingLeft: 0, justifyContent: 'space-around' }}>
        <BouncyCheckBox style={{ marginLeft: 15 }}
            iconStyle={{ borderColor: 'lightgray', borderRadius: 0, }}
            fillColor="green"
            onPress={(checkBook) => selectItem(food, checkBook)}
        />
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 22, fontWeight: '600' }}>{food.name}</Text>
            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: '400' }}>{food.description}</Text>
            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: '400' }}>{food.price}$</Text>
        </View>
        <View>
            <Image source={{ uri: food.image_url }} style={{ width: 120, height: 100, borderRadius: 10 }}></Image>
        </View>

    </View>)
}
