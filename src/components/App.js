import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Movies from './movies/Movies'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Movies}/>
      </div>
    </BrowserRouter>
  )
}

export default App;
