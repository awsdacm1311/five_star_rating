import logo from './logo.svg';
import './App.css';
import React, {  useContext } from 'react';
import {TreesContext} from "./index";

function App() {

  const {trees} = useContext(TreesContext);
  console.log(trees)
  return (
    <div className="App">
       <h1>My Trees</h1>
      {
        trees.map((n)=>(<li key={n.id}>{n.type}</li>))
      }
    </div>
  );
}

export default App;
