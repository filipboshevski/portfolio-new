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
import { selectIsFetching } from './redux/projects/projectSelectors';
import Spinner from './components/alone-spinner/Spinner';

const App = ({isFetching, fetchProjects}) => {

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
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />)
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching
})

const mapDispatchToProps = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);