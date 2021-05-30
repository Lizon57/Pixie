import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { editorReducer } from './reducers/editor-reducer';
import { dataReducer } from './reducers/data-reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    editorModule: editorReducer,
    dataModule: dataReducer
});


export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))); //Passing the reducer