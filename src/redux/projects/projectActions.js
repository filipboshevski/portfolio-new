const { default: Axios } = require("axios");

export const startFetchingProjects = () => ({
    type: 'START_FETCHING_PROJECTS'
});

export const fetchingProjectsSuccess = projects => ({
    type: 'FETCHING_PROJECTS_SUCCESS',
    payload: projects
});

export const fetchingProjectsFailure = error => ({
    type: 'FETCHING_PROJECTS_FAILURE',
    payload: error
});

export const fetchProjects = () => dispatch => {
    dispatch(startFetchingProjects());

    Axios.get('http://34.69.177.33/projects')
    .then(response => {
        dispatch(fetchingProjectsSuccess(response.data));
    })
    .catch(err => {
        dispatch(fetchingProjectsFailure(err));
    });
};