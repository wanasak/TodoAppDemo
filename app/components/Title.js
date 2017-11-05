import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Title extends Component {

    render() {
        const {children} = this.props

        return (
            <View style={styles.header}>
                <Text style={styles.title}>{children}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        backgroundColor: 'skyblue',
    },
    title: {
        textAlign: 'center',
        color: 'white',
    }
})