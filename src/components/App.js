import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Movies from './movies/Movies'
import Navbar from './layout/Navbar'
import PageNumbers from './layout/PageNumbers'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Movies}/>
        <PageNumbers />
      </div>
    </BrowserRouter>
  )
}

export default App;
