const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: action.id, text: action.text, completed: false }];
        case 'TOGGLE_TODO':
            return state.map(data => {
                if (data.id === action.id) {
                    return {
                        ...data,
                        completed: !data['completed']
                    }
                }
                return data;
            })
        default:
            return state;
    }
}
export default todos;