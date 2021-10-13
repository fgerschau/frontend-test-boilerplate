import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import Reducers from '../store/merged.reducer';


const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    Reducers,
    composeWithDevTools({})(middleWareEnhancer),
  );

  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore();
