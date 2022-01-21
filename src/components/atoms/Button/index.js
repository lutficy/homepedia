import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Button = ({title}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    wrapper: {
        height: 30,
        backgroundColor: '#EB4C60',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    title: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Nunito-Bold'
    }
})
