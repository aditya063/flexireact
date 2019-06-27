import React from 'react';
import './App.css';
import Flexi from './views/Flexi';

const flexiConfig = {
  items: [
    {
      name: 'person_name',
      label: "Person's Name",
      type: 'TextField'
    },
    {
      name: 'person_lastname',
      label: "Person's LastName",
      type: 'TextField'
    },
    {
      name: 'states',
      label: "Person's state",
      type: 'DropDown',
      values: ['Maharashtra', 'Kerala', 'Tamil Nadu']
    },
    {
      name: 'hobbies',
      label: "Person's hobbies",
      type: 'DropDown',
      values: ['Reading', 'Traveling', 'Cricket']
    }
  ]
};

function App() {
  const onFlexiSubmit = response => {
    console.log(response);
    alert(JSON.stringify(response));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>flexireact</h1>
        <Flexi onSubmit={onFlexiSubmit} config={flexiConfig} />
      </header>
    </div>
  );
}

export default App;
