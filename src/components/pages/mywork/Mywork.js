import React, { useEffect } from 'react';
import MyProject from '../../MyProject/MyProject';
import project1 from '../../../assets/project1.png';
import project2 from '../../../assets/project2.png';
import project3 from '../../../assets/project3.png';
import project4 from '../../../assets/project4.png';
import project5 from '../../../assets/project5.png';
import './Mywork.scss';
import { selectProjects } from '../../../redux/projects/projectSelectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Spinner from '../../alone-spinner/Spinner';

const imgs = [project1, project2, project3, project4, project5];

const MyWork = ({projects}) => {

    useEffect(() => {
        document.title = 'My Work | Full-Stack Developer';
    }, []);

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
    projects: selectProjects
});

export default connect(mapStateToProps)(MyWork);