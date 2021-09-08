import React, {useState} from 'react'
import {View, TextInput, TouchableOpacity, Text} from "react-native"
import { getData, styles } from '..'

export const Search = ({Callback}) =>{

    const [find, setCountry] = useState('')

    return(
        <View style={styles.search}>
            <TextInput placeholder="Find Country" onChangeText={text=>setCountry(text)} style={styles.searchInput}/>
            <TouchableOpacity onPress={()=>Callback(find)} style={styles.searchButton}>
                <Text style={styles.searchText}>Enter</Text>
            </TouchableOpacity>
        </View>
    )
}