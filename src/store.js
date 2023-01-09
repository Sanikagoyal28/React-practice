import configureStore from "redux"
import {persistReducer} from "redux-persist";
import {persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/es/storage/session";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware ,compose} from "redux";
 import rootReducer from "./reducers";
 import thunk from "redux-thunk"

 const persistconfig={
    key:"root",
    storage:sessionStorage,
    timeout:500
 }

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const persistreducer = persistReducer(persistconfig,rootReducer)
  const store = createStore(persistreducer ,composeEnhancers(applyMiddleware(thunk)));
  const persiststore = persistStore(store)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  export default store;
  export {persiststore}
