import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TextInput } from 'react-native'

export default class Input extends Component {

    static propTypes = {
        onSubmit: PropTypes.func,
        placeholder: PropTypes.string
    }

    state = {text: ''}

    onChangeText = (text) => {
        this.setState({text})
    }

    onSubmitEditing = () => {
        const {text} = this.state
        const {onSubmit} = this.props

        if (!text) return

        onSubmit(text)
        this.setState({text: ''})
    }

    render() {
        const {placeholder} = this.props
        const {text} = this.state

        return (
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={text}
                blurOnSubmit={false}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitEditing}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 15,
    }
})