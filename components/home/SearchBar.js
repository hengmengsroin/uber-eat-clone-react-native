import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
export default function SearchBar({ setLocation }) {
    return (
        <View style={{ marginTop: 16, flexDirection: 'row' }}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                query={{ key: "AIzaSyCSvBgdGGbSibeot3Ihu6Qx0bWtwjRby4k" }}
                onPress={(data, detail = nul) => {
                    // console.log(data.description);
                    let city = data.description.split(",")[0]
                    setLocation(city)
                }}
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    }

                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}

                renderRightButton={() => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 9, borderRadius: 30, backgroundColor: 'white', marginRight: 8 }}>
                        <AntDesign name="clockcircle" size={11} style={{ marginRight: 4 }} />
                        <Text>Search</Text>
                    </View>)
                }
            />
        </View>
    )
}
