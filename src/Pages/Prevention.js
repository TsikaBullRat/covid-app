import React from 'react'
import { Text, ScrollView } from 'react-native'
import { precautions, Tile, Sect } from '..'

export const Prevention = () => {
    console.log(precautions)
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {precautions.map(item =><Tile size="large" data={item} key={item.id} />)}
        </ScrollView>
    )
}