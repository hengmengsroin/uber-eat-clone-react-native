import React from 'react'
import { View, Text, Image } from 'react-native'

export default function About() {

    const image = "https://food.bolt.eu/og-img.jpg"
    const title = "FarmHouse Kitchen Thai Cuisine"
    const description = "Thai · Comfort Food · $$ "
    return (
        <View style={{ flexDirection: 'column' }}>
            <Image source={{
                uri: image
            }} style={{ height: 200, width: '100%' }} />
            <Text style={{ fontSize: 29, fontWeight: '600', color: "black", marginTop: 10, paddingHorizontal: 15 }}>{title}</Text>
            <Text style={{ fontSize: 16, fontWeight: '400', color: "black", marginTop: 10, paddingHorizontal: 15 }}>{description}</Text>
        </View>
    )
}
