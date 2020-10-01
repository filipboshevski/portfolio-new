import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/Header/Header';
import HomePage from './components/pages/homepage/Homepage';
import MyWork from './components/pages/mywork/Mywork';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import { connect } from 'react-redux';
import { fetchProjects } from './redux/projects/projectActions';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching, selectProjects } from './redux/projects/projectSelectors';
import Spinner from './components/alone-spinner/Spinner';
import Aboutme from './components/pages/aboutme/Aboutme';
import Contact from './components/pages/contact/Contact';
import Blog from './components/pages/blog/Blog';

const App = ({isFetching, projects, fetchProjects}) => {

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    return (
        <div className='App'>
            <Header />
            {
                isFetching ? <Spinner /> : (<Route render={({location}) => (
                    <TransitionGroup className='transition'>
                        <CSSTransition key={location.key} timeout={1400} classNames='fade'>
                            <Switch location={location}>
                                <Route exact path='/' component={HomePage} />
                                <Route exact path='/mywork' component={MyWork} />
                                <Route exact path='/aboutme' component={Aboutme} />
                                <Route exact path='/contact' component={Contact} />
                                <Route exact path='/blog' component={Blog} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />)
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

export default connect(mapStateToProps, mapDispatchToProps)(App);