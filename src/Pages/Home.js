import React from 'react'
import { ScrollView } from 'react-native'
import { Graph, Head, Sect, Tile } from '..';

export const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <Head />
            <Sect name="Prevention" Nav={navigation.navigate}>
                <Tile size="small" >
                    Hello World
                </Tile>
                <Tile size="small" >
                    Hello World
                </Tile>
                <Tile size="small" >
                    Hello World
                </Tile>
                <Tile size="small" >
                    Hello World
                </Tile>
                <Tile size="small" >
                    Hello World
                </Tile>
            </Sect>
            <Sect name="Stats" Nav={navigation.navigate}>
                <Graph />
            </Sect>
        </ScrollView>
    );
}