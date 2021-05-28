import './App.css';
import {compose} from 'redux';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/NewsContainer';
import Blog from './components/Blog/Blog';
import Files from './components/Files/Files';
import Gallery from './components/Gallery/Gallery';
import Events from './components/Events/Events';
import Discussions from './components/Discussions/Discussions';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializedApp } from './redux/appReducer/app-reducer';
import { useEffect } from 'react';
import UsersContainer from './components/Users/UsersContainer';
import { getAppInitialized } from './redux/appReducer/app-selectors';
import Registration from './components/Registration/Registration';


function App(props) {

  useEffect(() => {
    props.initializedApp();
  }, [])


  if (!props.initialized) {
    return <div>Загрузка</div>
  }
  return (
    
    <div className="app-wrapper">
      <HeaderContainer />
      <div className = "app-container">
        
        <Navbar />
        
        <div className = 'app-wrapper-content'>
          <Switch>
            <Route exact path = '/' render = {() => <Redirect to = '/profile'/>} />
            <Route path = '/profile/:userId?' render = {() => <ProfileContainer />} />
            <Route path = '/users' render = {() => <UsersContainer />} />
            <Route path = '/news' render = {() => <News />} />
            <Route path = '/blog' render = {Blog} />
            <Route path = '/files' render = {Files} />
            <Route path = '/gallery' render = {Gallery} />
            <Route path = '/events' render = {Events} />
            <Route path = '/discussions' render = {Discussions} />
            <Route path = '/login' render = {() => <Login />} />
            <Route path = '/registration' render = {() => <Registration />} />
          </Switch>
        </div>

        <Footer />
      </div>
    </div>  
  );
}

const mapStateToProps = (state) => {
  return {
    initialized: getAppInitialized(state),
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializedApp
  })
  )(App);
