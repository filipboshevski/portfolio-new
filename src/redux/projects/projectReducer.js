const INITIAL_STATE = {
    projects: null,
    err: null,
    isFetching: false
}

const projectReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'START_FETCHING_PROJECTS':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCHING_PROJECTS_SUCCESS':
            return {
                ...state,
                projects: action.payload,
                err: null,
                isFetching: false
            }
        case 'FETCHING_PROJECTS_FAILURE':
            return {
                ...state,
                err: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
};

export default projectReducer;