import Checkbox from './Checkbox';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'

export default class List extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        onRemoveItem: PropTypes.func.isRequired,
        onToggleItemCompleted: PropTypes.func.isRequired,
    }

    renderItem = (item, i) => {
        const {onToggleItemCompleted, onRemoveItem} = this.props
        const itemStyle = item.complete ? [styles.item, styles.complete] : styles.item;

        return (
            <View key={i} style={itemStyle}>
                <Text>{item.label}</Text>
                <View style={styles.rightSection}>
                    <Checkbox
                        isChecked={item.complete}
                        onToggle={() => onToggleItemCompleted(i)}
                    />
                    <TouchableOpacity onPress={() => onRemoveItem(i)}>
                        <Text style={styles.remove}>&times;</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        const {items} = this.props

        return (
            <ScrollView>
                {items.map(this.renderItem)}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'whitesmoke',
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    remove: {
        marginLeft: 10,
        marginBottom: 2,
        fontSize: 25,
        color: '#CD5C5C'
    },
    completed: {
        backgroundColor: 'whitesmoke'
    },
})
