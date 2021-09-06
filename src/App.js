import React, {useState} from 'react';
import './App.css';
import DisplayTab from './components/DisplayTab';
import UserForm from './components/UserForm';

function App() {
  const [alltabs, setAlltabs] = useState([
    {
      label:'label1',
      content: 'content1',
      review: 'review1'
    },
    {
      label:'label2',
      content: 'content2',
      review: 'review2'
    }
  ]);
  const createNewTab = (newTabObj) =>{
    setAlltabs([...alltabs,newTabObj])
  }
  return (
    <div className="App">
      <h1>Welcome to DutTech.org</h1>
      {JSON.stringify(alltabs)}
      <UserForm createNewTab={createNewTab}/>
      <DisplayTab alltabs={alltabs}/>
    </div>
  );
}

export default App;
