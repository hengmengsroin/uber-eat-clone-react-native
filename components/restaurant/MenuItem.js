import React, { useState } from 'react'
import { View, Text, Image, } from 'react-native'
import { Divider } from 'react-native-elements'
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox'
import { ScrollView } from 'react-native-gesture-handler'

export default function MenuItemList() {

    const foods = [
        {
            name: "Food Item",
            image_url: "https://food.bolt.eu/og-img.jpg",
            rating: 2.0,
            price: "20",
            duration: "hello hello "
        },
        {
            name: "Food Item",
            image_url: "https://food.bolt.eu/og-img.jpg",
            rating: 2.0,
            price: "20",
            duration: "hello hello"
        },
        {
            name: "Food Item",
            image_url: "https://food.bolt.eu/og-img.jpg",
            rating: 2.0,
            price: "20",
            duration: "hello hello"
        },
        {
            name: "Food Item",
            image_url: "https://food.bolt.eu/og-img.jpg",
            rating: 2.0,
            price: "20",
            duration: "hello hello"
        },
        {
            name: "Food Item",
            image_url: "https://food.bolt.eu/og-img.jpg",
            rating: 2.0,
            price: "20",
            duration: "hello hello"
        },
        {
            name: "Food Item",
            image_url: "https://food.bolt.eu/og-img.jpg",
            rating: 2.0,
            price: "20",
            duration: "hello hello"
        }
    ]

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            {foods.map((item, index) => {
                return (<View key={index}>
                    <MenuItem name={item.name} description={item.duration} image_url={item.image_url} price={item.price}></MenuItem>
                    <Divider orientation width={1.3} style={{ paddingHorizontal: 15 }}></Divider>
                </View>)
            })}
        </ScrollView>
    )
}

const MenuItem = (props) => {
    const [isSelected, setSelection] = useState(false)
    return (<View style={{ flexDirection: 'row', padding: 15, paddingLeft: 0, justifyContent: 'space-around' }}>
        <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={{ alignSelf: "center", }}
        />
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 22, fontWeight: '600' }}>{props.name}</Text>
            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: '400' }}>{props.description}</Text>
            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: '400' }}>{props.price}$</Text>
        </View>
        <View>
            <Image source={{ uri: props.image_url }} style={{ width: 120, height: 100, borderRadius: 10 }}></Image>
        </View>

    </View>)
}
