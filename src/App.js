import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import AddUsers from './component/AddUsers';
import Crud from './component/Crud';

function App() {
  return (
<>
<Home/>
<Switch>
  <Route exact path='/' component={Crud}></Route>
  <Route exact path='/AddUsers' component={AddUsers}></Route>
</Switch>

</>
  );
}

export default App;
