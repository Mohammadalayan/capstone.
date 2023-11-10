import React from 'react';
import './App.css';
import Soon from './soon';
import Header from './header';
import Nav from './nav';
import Main from './main';
import Menu from "./menu" 
import Footer from './footer';
import Mainb from './mainb';
import { Route, Routes, useLocation } from 'react-router-dom';
import Reserve from './reserve';
import Testimonials from './t';
import ConfirmedBookinga from './ConfirmedBooking';

function App() {
  const location = useLocation();

  // Render the components conditionally based on the route
  const renderContent = () => {
    if (location.pathname === '/reserve') {
      return (<>
            <article className='rend'> <Header/> 
       <Nav/> </article>
       <article className='re'><Reserve /></article> 
      <article className='ren'><Footer/></article>
     </>
      )
      ;
    }
    if (location.pathname === '/menu') {
      return (<>
            <article className='rend'> <Header/> </article>
            
            <article className='render'><Nav/> </article> 
       <article className='re'><Menu/></article> 
      <article className='ren'><Footer/></article>
     </>
      )
      ;
    } 
    if (location.pathname === '/soon') {
      return (<>
            <article className='renda'> <Header/> </article>
            
            <article className='renderb'><Nav/> </article> 
       <article className='rec'><Soon/></article> 
      <article className='rendeb'><Footer/></article>
     </>
      )
      ;
    }
    if (location.pathname === '/ConfirmedBooking') {
      return (<>
            <article className='rend'> <Header/> 
       <Nav/> </article>
       
       <article className='ree'><ConfirmedBookinga /></article> 
      <article className='rendeb'><Footer/></article>
     </>
      )
      ;
    }else {
      return (
        <>
          <Header />
          <Nav />
          <Routes>
            <Route path="/footer" element={<Footer />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/ConfirmedBooking" element={<ConfirmedBookinga />} />
          </Routes>
          <Main />
          <Mainb />
          <Testimonials/>
          <Footer/>
        </>
      );
    }
  };

  return <>{renderContent()}</>;
}

export default App;
