// import { Tab } from '@mui/material';
import React from 'react';
// import logo from './logo.svg';
import './App.css';


import BasicTable  from './components/Table';
// import Text from './components/Heading';
// import Input from './components/Input'
// import MenuListComposition from './components/Filter'

function App() {



  return (
    <div className='App'>
      <div className='container'>
        {/* <div className='nav-bar2'>
          <Text></Text>
          <MenuListComposition></MenuListComposition>
        </div> */}
        
        {/* <Input text='Input'></Input> */}
        <BasicTable ></BasicTable>
      </div>
    </div>
    
    
  );
}

export default App;
