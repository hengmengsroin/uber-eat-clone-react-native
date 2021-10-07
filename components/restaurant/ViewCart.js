import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function ViewCart() {

    const items = useSelector((state) => state.cartReducer.selectedItems.items)

    const total = items.map(item => Number(item.price)).reduce((prev, curr) => prev + curr, 0)
    const totalUSD = total.toLocalString('en', {
        style: 'currency',
        currency: 'USD',
    })

    console.log(totalUSD);
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 40,
            justifyContent: 'center',
            zIndex: 999,

        }}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                <TouchableOpacity style={{
                    marginTop: 0,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    borderColor: 30,
                    padding: 15,
                    width: 300,
                    position: 'relative',
                    borderRadius: 30
                }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
