import React, { Component } from 'react'
import '../index.css'
import TrelloList from './TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './TrelloActionButton'
import { DragDropContext } from 'react-beautiful-dnd'
import { sort } from '../actions'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: flex;
  flex-directioon: row;
`

class App extends Component {

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result
    if(!destination) {
      return
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    )
  }

  render() {

    const { lists } = this.props

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div style={styles.body}>
<<<<<<< HEAD
          <h1>Task Manager</h1>
=======
          <h1 style={{color: 'white'}}>Task Manager</h1>
>>>>>>> 5bf6e106e0f5b4753e3c92459dbf11b31d3da1cb
          <ListContainer>
            { lists.map(list => (
              <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
            ))}
            <TrelloActionButton list />
          </ListContainer>
        </div>
      </DragDropContext>
    )
  }
}

const styles = {
  body: {
    fontFamily: 'Roboto'
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App)
