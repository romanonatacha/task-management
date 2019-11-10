import React, { Component } from 'react';
import TrelloList from './TrelloList'
import { connect } from 'react-redux'
import TrelloActionButton from './TrelloActionButton'
import { DragDropContext } from 'react-beautiful-dnd'

class App extends Component {

  onDragEnd = () => {

  }

  render() {

    const { lists } = this.props

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div style={styles.body}>
          <h1>Task Manager</h1>
          <div style={styles.listsContainer}>
            { lists.map(list => (
              <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
            ))}
            <TrelloActionButton list />
          </div>
        </div>
      </DragDropContext>
    )
  }
}

const styles = {
  body: {
    fontFamily: 'Roboto'
  },
  listsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App)
