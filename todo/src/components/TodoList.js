import React, { useState, useReducer } from 'react';
// import { todoReducer, initialState } from '../reducers/todoReducer';
import { TodoForm } from './TodoForm'
import { ListGroup, ListGroupItem, Button } from 'reactstrap';



const todoReducer = (state, action) => {
  switch(action.type){
    case "ADD_ITEM":
      return [
        ...state,
        action.payload
      ]
    case "MARK_COMPLETE":
      const newState = state.map((item) => {
        if (item.id === action.payload.id){
          return {...item, completed: !action.payload.completed}
        } else return item
      })
      console.log(state, newState)
      return newState
    default:
      return state
  }
}

const initialListState = []
const intitialItemState = {
  item: '',
  completed: false,
  id: Date.now()
}

export const TodoList = () => {
  const [list, dispatch] = useReducer(todoReducer, initialListState)
  const [ newItem, setNewItem ] = useState({...intitialItemState})

  const handleChange = (e) => {
    setNewItem({...newItem, item: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: "ADD_ITEM", payload: newItem})
    setNewItem({...intitialItemState, id: Date.now()})
  }

  const markComplete = (item) => {
    dispatch({ type: "MARK_COMPLETE", payload: item})
  }

  return (
    <div style={{padding: "2%"}}>
      <TodoForm onSubmit={handleSubmit} newItem={newItem} onChange={handleChange}/>
      <ListGroup className="w-50 mt-4">
        {list.map(item => 
          <ListGroupItem key={item.id} className="w-75 d-flex justify-content-between">
            {item.completed && <span style={{textDecoration: 'line-through'}}>{item.item}</span> ||
            <span>{item.item}</span>
            }
            <Button onClick={() => markComplete(item)} color="secondary" size="sm">Mark Complete</Button>
          </ListGroupItem>
        )}
      </ListGroup>
    </div>
  )
}