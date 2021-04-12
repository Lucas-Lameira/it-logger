import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {

    //init materialize js
    M.AutoInit();
  })
  return (
    <div className="App">
      <header className="App-header">
    
        Learn React

      </header>
    </div>
  );
}

export default App;
