let nextToDo = 0;

/*
 * action creators
 */

export const addTodo = text => {
    return {
        type: "ADD_TODO",
        id: nextToDo++,
        text
    }
}
export const setVisibilityFilter = filter => {
    return {
        type: "SET_VISIBILITY_FILTER",
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

/*
 * other constants (action types)
 */
export const visibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
}