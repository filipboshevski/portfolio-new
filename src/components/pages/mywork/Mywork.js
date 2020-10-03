import React, { useEffect } from 'react';
import MyProject from '../../MyProject/MyProject';
import project1 from '../../../assets/project1.png';
import project2 from '../../../assets/project2.png';
import project3 from '../../../assets/project3.png';
import project4 from '../../../assets/project4.png';
import project5 from '../../../assets/project5.png';
import './Mywork.scss';
import { selectIsFetching, selectProjects } from '../../../redux/projects/projectSelectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Spinner from '../../alone-spinner/Spinner';
import { fetchProjects } from '../../../redux/projects/projectActions';

const imgs = [project1, project2, project3, project4, project5];

const MyWork = ({projects, isFetching, fetchProjects}) => {

    useEffect(() => {
        document.title = 'My Work | Full-Stack Developer';
        fetchProjects();
    }, [fetchProjects]);

    return (
        <div className='mywork'>
            <h1 className='mywork__heading'>Portfolio</h1>
            {
                (<div className='mywork__projects'>
                    {
                        projects ? projects.map((project, index) => (
                            <MyProject img={imgs[index]} key={project._id} project={project}/>
                        )) : <Spinner />
                    }
                </div>)
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching,
    projects: selectProjects
})

const mapDispatchToProps = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyWork);