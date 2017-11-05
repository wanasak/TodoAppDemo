import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import Footer from '../components/Footer';
import Input from '../components/Input';
import List from '../components/List';
import Title from '../components/Title';
import { actionCreators } from '../redux/todoRedux';

const mapStateToProps = (state) => ({
  items: state.items,
})

class Todo extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  addItem = (item) => {
    const {dispatch} = this.props

    dispatch(actionCreators.addItem(item))
  }

  removeItem = (index) => {
    const {dispatch} = this.props
    
    dispatch(actionCreators.removeItem(index))
  }

  toggleItemCompleted = (index) => {
    const {dispatch} = this.props

    dispatch(actionCreators.toggleItemCompleted(index))
  }

  removeCompleted = () => {
    const {dispatch} = this.props

    dispatch(actionCreators.removeCompleted())
  }

  render() {
    const {items} = this.props

    return (
      <View>
        <Title>Todo List</Title>
        <Input
          onSubmit={this.addItem}
          placeholder={'Enter todo item'}
        />
        <View style={styles.divider}></View>
        <List 
          items={items}
          onRemoveItem={this.removeItem}
          onToggleItemCompleted={this.toggleItemCompleted}
        />
        <Footer onRemoveCompleted={this.removeCompleted} />
      </View>
    )
  }
}

export default connect(mapStateToProps)(Todo)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  },
})