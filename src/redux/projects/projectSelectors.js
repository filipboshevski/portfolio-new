import { createSelector } from 'reselect';

const projects = store => store.projects;

export const selectProjects = createSelector(
    [projects],
    projects => projects ? projects.projects : null
);

export const selectIsFetching = createSelector(
    [projects],
    projects => projects ? projects.isFetching : null
);