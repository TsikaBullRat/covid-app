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

const InfoCard = () =>{
    return(
        <View>
            
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

const StatTab = ({data}) =>{


    return(
        <View style={styles.stats}>
            <View style={styles.shortside}>
                <Text style={styles.h3}>{data.label}</Text>
            </View>
            <View style={styles.longside}>
                <Text style={styles.statText}>{`${Object.keys(data)[1]}: ${data.label === "Today"?data.Active:data.Cases}`}</Text>
                <Text style={styles.statText}>{`${Object.keys(data)[2]}: ${data.label === "Today"?data.Cases:data.Deaths}`}</Text>
                <Text style={styles.statText}>{`${Object.keys(data)[3]}: ${data.label === "Today"?data.Deaths:data.Recovery}`}</Text>
            </View>
        </View>
    )
}

export { Head, Sect, Tile, Graph, QuickTab, InfoCard, StatTab }
