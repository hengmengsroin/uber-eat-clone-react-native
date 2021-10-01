import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTab(props) {



    return (
        <View style={{ flexDirection: 'row', alignSelf: "center" }}>
            <HeaderButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            ></HeaderButton>
            <HeaderButton
                text="Pick-up"
                btnColor="white"
                textColor="black"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            ></HeaderButton>
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 30
    }} onPress={() => props.setActiveTab(props.text)}>

        <Text style={{
            color: props.activeTab !== props.text ? "black" : "white",
            fontSize: 15,
            fontWeight: "900"
        }}>{props.text}</Text>
    </TouchableOpacity>
)
