import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRes = [
    {
        name: "Helo",
        image_url: "https://food.bolt.eu/og-img.jpg",
        rating: 2.0,
        price: "$$",
        duration: "30-40 min"
    },
    {
        name: "Helo",
        image_url: "https://food.bolt.eu/og-img.jpg",
        rating: 2.0,
        price: "$$",
        duration: "30-40 min"
    },
    {
        name: "Helo",
        image_url: "https://food.bolt.eu/og-img.jpg",
        rating: 2.0,
        price: "$$",
        duration: "30-40 min"
    }
]

export default function RestaurantList(props) {
    return (
        <View>
            {
                props.restaurantData.map((item, index) => <RestaurantItem key={index} image_url={item.image_url} name={item.name} rating={item.rating} time={item.duration} navigation={props.navigation} />)
            }

        </View>
    )
}

const RestaurantItem = (props) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => {
        props.navigation.navigate("Detail")
    }}>
        <View style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
            <RestaurantImage image_url={props.image_url} />
            <RestaurantInfo name={props.name} time={props.time} rating={props.rating} />
        </View>
    </TouchableOpacity>
)

const RestaurantImage = (props) => (
    <>
        <Image source={{
            uri: props.image_url
        }} style={{
            height: 180,
            width: '100%'
        }} />
        <TouchableOpacity style={{ position: 'absolute', top: 20, right: 2 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color='white' />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: 'gray', }}>{props.time}</Text>
        </View>
        <View style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: 'center', borderRadius: 15, justifyContent: 'center' }}>
            <Text >{props.rating}</Text>
        </View>
    </View>
)