import React from 'react'
import RowPoster from '../components/raw-poster/RowPoster';
import {originals,actions,topmovies,romancemovies,documentries} from '../urls'
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/banner/Banner';

function posterview() {
  return (
    <div>
     <Navbar/>
     <Banner/>
     <RowPoster url={originals} title='Netflix Orginals' />
     <RowPoster  url={topmovies} title='Top Moives' topMovies />
     <RowPoster  url={actions} title='Action' isSmall />
     <RowPoster  url={romancemovies} title='Romance Movies' isSmall />
     <RowPoster  url={documentries} title='Documentaries' isSmall />
    </div>
  )
}

export default posterview
