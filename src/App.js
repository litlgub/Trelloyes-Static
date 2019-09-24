import React from 'react';
import List from './List';
import './App.css';

function App(props) {
  console.log(props)
  return (
    <main className='App'>
        <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {props.store.lists.map(list => {
        return (
          <List list = {list} allCards={props.store.allCards}/>
        )
      })}

    </div>
      
    </main>
  );
}

export default App;