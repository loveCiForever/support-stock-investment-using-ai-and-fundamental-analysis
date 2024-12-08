import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
import SideBar from '../components/sideBar/SideBar.jsx';
import SearchBar from '../components/searchBar/SearchBar.jsx';
import Market from '../components/market/Market.jsx';

import MainSection from '../components/mainSection/MainSection.jsx';
import MayBeYouCare from '../components/mayBeYouCare/MayBeYouCare.jsx';
import FinancialNew from '../components/financialNews/FinancialNew.jsx';

const HomePage = () => {
  useEffect(() => {
    document.title = "Home Page";
    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
  }, []);

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }


  return (
    <div className='flex flex-col items-center min-w-full min-h-screen justify-center// bg-yellow-00'>

      <div className='fixed inset-x-0 top-0 z-1 min-w-[1000px] bg-red-00'>
        <Header toggleSideBar={toggleSideBar} />
      </div>

      {isSideBarOpen ? <SideBar toggleSideBar={toggleSideBar} /> : ''}

      <div className='flex items-center justify-center w-auto mt-20'>
        <Market />
      </div>

      <SearchBar />

      <div className='flex w-[900px]'>
        <div className='flex-col'>
          <div className='flex items-stretch justify-center bg-red mt-[20px] h-auto//'>
            <MayBeYouCare />
          </div>
          <div className='flex mt-10 mb-32 bg-red-00'>
            <FinancialNew />
          </div>
        </div>

        <div>
          
        </div>

      </div>




      <div className='fixed inset-x-0 bottom-0 z-10 flex items-center justify-center px-10 min-w-[800px]'>
        <Footer toggleSideBar={toggleSideBar} />
      </div>

    </div>
  );
}

export default HomePage;