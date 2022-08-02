import './App.css';
import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="main">
      <h2>CURD Operation</h2>
      <BrowserRouter>
      <Routes>
        <Route exact path="/create" component={Create}/>
        <Route exact path="/read" component={Read}/>
        <Route exact path="/update" component={Update}/>

      </Routes>
      </BrowserRouter>

      
      
     
      
    </div>
  );
}

export default App;