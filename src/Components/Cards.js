import React, { useContext } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
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

const TopBulge = () =>{
    return(
        <View style={styles.top}>

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

const Tile = ({ size, data }) => {

    const style = size === "small" ?styles.small :size === "large" ? styles.large: null
    const img = size === "small" ?styles.smallimg :size === "large" ? styles.largeimg: null
    return (
        <View
            style={ style }
        >
            <Text style={styles.h5}>
                {size === "small" ?data.textshort:null}
            </Text>
            <Image source={data.img} style={img}/>
            {size === "large" ?<Text style={styles.h5}>{data.text}</Text>:null }
        </View>
    );
}

const QuickTab = () =>{
    return(
        <View>
            <Text>Find out more now</Text>
        </View>
    )
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

export { Head, Sect, Tile, Graph, QuickTab, TopBulge }