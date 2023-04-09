import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='min-h-[calc(100vh-50px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;