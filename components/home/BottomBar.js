import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
export default function BottomBar(props) {

    return (
        <View style={{ flexDirection: 'row', margin: 10, marginHorizontal: 30, justifyContent: 'space-between' }}>
            <Menu icon="home" text="Home" activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu} />
            <Menu icon="search" text="Browse" activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu} />
            <Menu icon="shopping-bag" text="Grocery" activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu} />
            <Menu icon="receipt" text="Orders" activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu} />
            <Menu icon="user" text="Account" activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu} />
        </View>
    )
}

const Menu = (props) => (
    <TouchableOpacity onPress={() => props.setActiveMenu(props.text)}>
        <FontAwesome5 name={props.icon} size={20} color={props.activeMenu == props.text ? "black" : "gray"} style={{ alignSelf: 'center', marginBottom: 3 }} />
        <Text style={{ fontWeight: '600', color: props.activeMenu == props.text ? "black" : "gray" }}>{props.text}</Text>
    </TouchableOpacity>
)
