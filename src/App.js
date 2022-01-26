import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
