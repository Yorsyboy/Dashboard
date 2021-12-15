import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import Home from './Home';
import Tables from './Tables';
import Forms from './Forms';
import TodoList from './TodoList';
import API from './API';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path='/' exact component={Home}/>
          <Route path='/tables' exact component={Tables}/>
          <Route path='/forms' exact component={Forms}/>
          <Route path='/todolist' exact component={TodoList}/>
          <Route path='/api' exact component={API}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
