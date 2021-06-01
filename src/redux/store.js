import thunk from 'redux-thunk';
import authReducer from './authReducer/auth-reducer';
import profileReducer from './profileReducer/profile-reducer';
import { reducer as formReducer } from 'redux-form'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import appReducer from './appReducer/app-reducer';
import usersReducer from './usersReducer/users-reducer';
import newsReducer from './newsReducer/news-reducer';



let reducers = combineReducers ({
    profile: profileReducer,
    form: formReducer,
    auth: authReducer,
    app: appReducer,
    users: usersReducer,
    news: newsReducer
});



const store = createStore(reducers, applyMiddleware(thunk));

export default store;