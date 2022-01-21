import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyHouse } from '../../../assets'

const Categories = ({title, image}) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        // marginRight: 15
    },
    image: {
        width: 71,
        height: 71
    },
    title: {
        fontSize: 14,
        color: '#505050',
        fontFamily: 'Nunito-SemiBold',
        paddingTop: 5
    }
})
