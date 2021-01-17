import React from 'react';

import { Route, Switch } from 'react-router-dom';

// import Header from '../Header';
// import Content from '../Content';
import Home from '../Home';
import MovieDetail from '../MovieDetail';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/movie/:id" component={MovieDetail} /> */}
        <Route path="/movie/:id" render={({match}) => {
          const { id } = match.params;
          return <MovieDetail id={id} />
        }} />
      </Switch>
    </main>
    
  );
}

export default App;
