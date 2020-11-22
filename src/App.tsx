import React from 'react';
import { Provider } from 'react-redux';

// import RepositoryList from './components/RepositoryList';
// import TaskList from './components/TaskList';
import SkateApp from './components/MapLeaflet';
import './App.css';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      {/* <RepositoryList />
      <TaskList /> */}
      <SkateApp />
    </Provider>
  );
};

export default App;
