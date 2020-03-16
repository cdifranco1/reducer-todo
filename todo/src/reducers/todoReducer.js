
export const todoReducer = (state, action) => {
  switch(action.type){
    case "ADD_ITEM":
      return [
        ...state,
        action.payload
      ]
    case "MARK_COMPLETE":
      const completedState = state.map((item) => {
        if (item.id === action.payload.id){
          return {...item, completed: !action.payload.completed}
        } else return item
      })
      return completedState
    case "CLEAR_COMPLETE":
        const filteredState = state.filter(item => !item.completed)
        return filteredState
    default:
      return state
  }
}

export const initialListState = []