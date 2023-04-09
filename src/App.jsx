import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;