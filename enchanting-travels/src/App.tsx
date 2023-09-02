import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import EnchantingTravelsHomepage from './pages/homepage/enchantingTravelsHomepage';
import CreateJourney from './pages/create-journey/createJourney';
import PreviousJourneys from './pages/previous-journeys/previousJourney';
import AllEnquiriesPage from './pages/all-enquiries-page/allEnquiriesPage';
import Navbar from './components/navigation-bar/navbar';

const router = createBrowserRouter([
  {
    path : "",
    element : <EnchantingTravelsHomepage/>

  },
  {
    path : "/create-journey",
    element : <CreateJourney/>

  },
  {
    path : "/my-prev-journey",
    element : <PreviousJourneys/>

  },
  {
    path : "/journey-enquiries",
    element : <AllEnquiriesPage/>

  }
])
function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
    
    <RouterProvider router={router}></RouterProvider>
    </div>
    </>
  );
}

export default App;
