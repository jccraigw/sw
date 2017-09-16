let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

function receiveTodos(todos) {
  return {
    type: "RECEIVE_TODOS",
    todos: todos
  }
}

export function getTodos() {
  return dispatch => {
    return fetch(`http://localhost:3000/todos`)
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json)))
  }
}

