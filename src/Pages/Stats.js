import React, {useState} from 'react'
import { Text } from 'react-native'
import { StatTab, Search, getData } from '..'

export const Stats = ({stats}) => {

    const [data, setData] = useState(stats)
    const Find = item =>{
        getData(setData, item)
    }

    console.log(data)

    return (
        <>
            <Search Callback={Find}/>
            <StatTab data={data.Today} />
            <StatTab data={data.Totals} />
        </>
    )
}