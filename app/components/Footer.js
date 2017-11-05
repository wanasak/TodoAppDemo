import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class Footer extends Component {

    static propTypes = {
        onRemoveCompleted: PropTypes.func,
    }

    render() {
        const {onRemoveCompleted} = this.props

        return (
            <TouchableOpacity style={styles.footer} onPress={onRemoveCompleted}>
                <Text style={styles.remove}>Remove completed items</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
        paddingVertical: 15,
    },
    remove: {
        color: 'red',
    }
})