import { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

import {Provider} from 'react-redux';
import store from './store';

function App() {
  useEffect(() => {
    //init materialize js
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />        
        <AddButton />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />  
      </Fragment>    
    </Provider>
  );
}

export default App;
