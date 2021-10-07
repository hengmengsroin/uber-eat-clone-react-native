import React from 'react'
import { View, Text, Image } from 'react-native'

export default function About({ restaurant }) {


    // let restaurant = {
    //     image_url: "https://food.bolt.eu/og-img.jpg",
    //     name: "Hello this is the name",
    //     price: "$$",
    //     categories: [
    //         {
    //             title: "hello"
    //         },
    //         {
    //             title: "hello"
    //         }, {
    //             title: "hello"
    //         }
    //     ]
    // }
    const { name, image_url, price, categories } = restaurant
    let formattedCategory = categories.map(item => item.title).join(" · ");

    let priceString = price ? (" · " + price + " · 💳") : "";
    formattedCategory = formattedCategory + priceString
    let rating = " · " + restaurant.rating + "⭐️" + `(${restaurant.review_count})`
    formattedCategory = formattedCategory + rating

    return (
        <View style={{ flexDirection: 'column' }}>
            <Image source={{
                uri: image_url
            }} style={{ height: 200, width: '100%' }} />
            <Text style={{ fontSize: 29, fontWeight: '600', color: "black", marginTop: 10, paddingHorizontal: 15 }}>{name}</Text>
            <Text style={{ fontSize: 16, fontWeight: '400', color: "black", marginTop: 10, paddingHorizontal: 15 }}>{formattedCategory}</Text>
        </View>
    )
}
