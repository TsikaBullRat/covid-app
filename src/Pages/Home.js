import React from 'react'
import { ScrollView } from 'react-native'
import { Graph, Head, Sect, Tile, QuickTab, precautions, styles } from '..';

export const Home = ({ navigation }) => {
    console.log(precautions)
    return (
        <ScrollView>
            <Head />
            <Sect name="Prevention" Nav={navigation.navigate}>
                {precautions.map(item =><Tile size="small" data={item} key={item.id}/>)}
            </Sect>
            <Sect name="Stats" Nav={navigation.navigate}>
                <Graph />
            </Sect>
            <Sect name="Info" Nav={navigation.navigate}>
                <QuickTab />
            </Sect>
        </ScrollView>
    );
}