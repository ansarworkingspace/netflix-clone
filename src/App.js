import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Banner from './components/banner/Banner';
import RowPoster from './components/raw-poster/RowPoster';
import {originals,actions,topmovies,romancemovies,documentries} from './urls'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPoster url={originals} title='Netflix Orginals' />
     <RowPoster  url={topmovies} title='Top Moives' topMovies />
     <RowPoster  url={actions} title='Action' isSmall />
     <RowPoster  url={romancemovies} title='Romance Movies' isSmall />
     <RowPoster  url={documentries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
