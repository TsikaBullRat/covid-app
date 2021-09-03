import React, { useContext } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from '..'

const Head = () => {
    return (
        <View style={styles.head}>
            <Text style={styles.h2}>
                What the what
            </Text>
        </View>
    )
}

const Graph = () =>{
    return(
        <View style={styles.graph}>
            <Text>Hey Hi Hello There Bright World</Text>
        </View>
    )
}

const Tile = ({ size, children }) => {
    return (
        <View
            style={size === "small" ? styles.small : styles.large}
        >
            <Text style={styles.h5}>
                {children}
            </Text>
        </View>
    );
}

const Sect = ({ name, children, Nav }) => {

    return (
        <>
            <Text style={styles.sectName} onPress={() => Nav(name)}>{name}</Text>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {children}
            </ScrollView>
        </>
    )
}

export { Head, Sect, Tile, Graph }