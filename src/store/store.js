import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { HttpService } from './services/http-service';


import { rootReducer, rootEpic } from './rootDuck';
import { SCHEDULE_API_URL, CORE_API_URL, HEADERS, JSON_TOKEN, AUTH0_API_URL, AUTH0_URL, EASCHEDULE_API_URL } from './services/config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger();

const epicMiddleware = createEpicMiddleware({
    dependencies: {
        ajaxGet: HttpService.get,
        ajaxPost: HttpService.post,
        ajaxPut: HttpService.put,
        ajaxDel: HttpService.delete,
        SCHEDULE_API_URL,
        CORE_API_URL,
        HEADERS,
        JSON_TOKEN,
        AUTH0_API_URL,
        AUTH0_URL,
        EASCHEDULE_API_URL
    }
});
let middlewares = process.env.NODE_ENV === 'production' ? applyMiddleware(epicMiddleware) : applyMiddleware(epicMiddleware, loggerMiddleware);
const store = createStore(
    rootReducer,
    composeEnhancers(middlewares)
);

epicMiddleware.run(rootEpic);

export default store;
