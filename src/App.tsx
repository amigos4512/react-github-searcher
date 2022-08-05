import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Route, Routes } from 'react-router-dom';
import { SearchUserPage } from './pages/SearchUserPage';
import { SearchUserRepoPage } from './pages/SearchUserRepoPage';
import { Header } from './components/header/Header';
import 'normalize.css';
import { Provider } from 'react-redux';
import { appReducer } from './reducers/appReducer';
import createSagaMiddleware from 'redux-saga';
import appSaga from './sagas/appSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(appSaga);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path='/' element={<SearchUserPage />} />
        <Route path='/repository/:username' element={<SearchUserRepoPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
