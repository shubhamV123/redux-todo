import { visibilityFilters } from '../actions'

const visibleFilter = (state = visibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state
    }
}

export default visibleFilter;