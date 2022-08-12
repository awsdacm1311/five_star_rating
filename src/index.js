import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const TreesContext = createContext();

const trees =[
  {id:1, type:"pino"},
  {id:2, type:"roble"},
  {id:3, type:"manzano"},
  {id:4, type:"romero"},
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={{trees}}>
    <App />
  </TreesContext.Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
