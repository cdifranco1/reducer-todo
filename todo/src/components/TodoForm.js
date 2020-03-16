import React from 'react';

export const TodoForm = ({onSubmit, onChange, newItem}) => {
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={newItem.item} name="item" placeholder="Add todo.."/>
      <button type="submit">Submit</button>
    </form>
  )
}