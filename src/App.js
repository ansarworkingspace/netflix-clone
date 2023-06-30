import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Banner from './components/banner/Banner';
import RowPoster from './components/raw-poster/RowPoster';
import {originals,actions} from './urls'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPoster url={originals} title='Netflix Orginals' />
     <RowPoster  url={actions} title='Action' isSmall />
    </div>
  );
}

export default App;
