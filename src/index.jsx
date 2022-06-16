import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeRoot from './components/Home';
import AllNfts from './components/menu-pages/all-ntfs';
import Art from './components/menu-pages/art';
import Collectibles from './components/menu-pages/collectibles';
import DomainNames from './components/menu-pages/domain-names';
import Explore from './components/menu-pages/explore';
import Music from './components/menu-pages/music';
import Photography from './components/menu-pages/photography';
import Sports from './components/menu-pages/sports';
import TradingCards from './components/menu-pages/trading-cards';
import Utility from './components/menu-pages/utility';
import VirtualWorlds from './components/menu-pages/virtual-worlds';
import Navbar from './components/navbar/Navbar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomeRoot />} />
      <Route path="/all-nfts" element={<AllNfts />} />
      <Route path="/art" element={<Art />} />
      <Route path="/collectibles" element={<Collectibles />} />
      <Route path="/domain-names" element={<DomainNames />} />
      <Route path="/expore" element={<Explore />} />
      <Route path="/music" element={<Music />} />
      <Route path="/photohtaphy" element={<Photography />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/trading-cards" element={<TradingCards />} />
      <Route path="/utility" element={<Utility />} />
      <Route path="/virtual-worlds" element={<VirtualWorlds />} />
    </Routes>
  </BrowserRouter>
);
