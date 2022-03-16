import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Word from './components/Word';

function App() {

  const Home = (props) =>{
    return(
      <div>
        <h1>WELCOME</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/:input/:textcolor?/:bgcolor?"> 
          <Word/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
