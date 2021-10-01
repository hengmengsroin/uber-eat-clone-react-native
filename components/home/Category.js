import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'


const items = [
    {
        image: require('../../assets/icon.png'),
        title: "Pickup"
    },
    {
        image: require('../../assets/icon.png'),
        title: "Fast food"
    },
    {
        image: require('../../assets/icon.png'),
        title: "Soft drink"
    },

    {
        image: require('../../assets/icon.png'),
        title: "Khmer food"
    }, {
        image: require('../../assets/icon.png'),
        title: "Indian food"
    },
    {
        image: require('../../assets/icon.png'),
        title: "Pickup"
    },

]

export default function Category() {
    return (
        <View style={{ marginTop: 5, backgroundColor: '#fff', paddingVertical: 10, paddingLeft: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}}>
                {items.map((item, index) => <Item key={index} title={item.title} image={item.image}></Item>)}
            </ScrollView>
        </View>

    )
}

const Item = (props) => (
    <View style={{ alignItems: 'center', marginRight: 30 }}>
        <Image source={props.image} style={{
            width: 50,
            height: 50,
            resizeMode: 'contain'
        }} />
        <Text style={{
            fontWeight: '700',
            fontSize: 13
        }}>{props.title}</Text>
    </View>)