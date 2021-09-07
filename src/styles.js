import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItem: 'center',
        justifyContent: 'center',
    },
    h1:{
        fontSize: 40,
        color: '#fff'
    },
    h2:{
        fontSize: 35,
        color: '#fff'
    },
    h3:{
        fontSize: 30,
        color: '#fff'
    },
    h4:{
        fontSize: 25,
        color: '#fff'
    },
    h5:{
        fontSize: 20,
        color: '#fff'
    },
    h6:{
        fontSize: 15,
        color: '#fff'
    },
    head:{
        width: '90%',
        height: 180,
        borderRadius: 25,
        backgroundColor: '#52006A',
        padding: 10,
        margin: 17
    },
    sectName:{
        marginLeft: 10,
        fontSize: 25,
        color: '#52006A'
    },
    small:{
        width: 130,
        height: 160,
        backgroundColor: '#52006A',
        borderRadius: 25,
        paddingTop: 10,
        paddingLeft: 10,
        margin: 10,
        flex: 1,
        alignContent: "center",
        justifyContent: 'center'
    },
    large:{
        width: 280,
        height: 500,
        backgroundColor: '#FF7600',
        borderRadius: 25,
        // padding: 10,
        margin: 10,
        flex: 1,
        alignContent: "center",
        justifyContent: 'center'
    },
    graph:{
        width: 340,
        height: 180, 
        backgroundColor: '#52006A',
        borderRadius: 25,
        margin: 10,
        padding: 15
    },
    smallimg:{
        width: 120,
        height: 120
    },
    largeimg:{
        width: 300,
        height: 350
    },
    stats:{
        flexDirection: 'row',
        height: 200,
        width: '90%',
        marginLeft: 20,
        marginTop: 20
    },
    shortside:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFA900',
        width: 5000,
        height: '100%',
        borderRadius: 25
    },
    longside:{
        borderTopEndRadius: 25,
        borderBottomEndRadius: 25,
        borderWidth: 5,
        borderColor: '#FFA900',
        width: '60%',
        height: '90%',
        position: 'relative',
        top: 10,
        left:-5,
        backgroundColor: '#fff',
        padding: 10
    },
    search:{
        flexDirection: 'row',
        width: 500,
        height: 40,
        marginTop: 20,
        marginLeft: 10
    },
    searchInput:{
        padding: 10,
        borderColor: '#FFA900',
        borderBottomStartRadius: 25,
        borderTopStartRadius: 25,
        borderWidth: 3,
        width: 250,
        height: '100%',
        backgroundColor: '#fff',
        fontSize: 20
    },
    searchButton:{
        backgroundColor: '#FFA900',
        width: 80,
        height: '100%',
        borderBottomEndRadius: 25,
        borderTopEndRadius: 25,
        padding: 5
    },
    searchText:{
        color: '#fff',
        fontSize: 20
    },
    statText:{
        fontSize: 18
    }
})