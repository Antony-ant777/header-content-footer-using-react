import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Header from './components/header';
import Content from './components/cont';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Header />
   <Content/>
   <Footer/>
  </React.StrictMode>
);

