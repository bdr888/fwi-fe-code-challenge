import React, { Fragment } from 'react';

import CreatePlayer from './CreatePlayer/CreatePlayer';
import Header from './Header/Header';
import PlayerTable from './PlayerTable/PlayerTable';

const App = () => {
  return (
    <Fragment>
      <Header />
      <CreatePlayer />
      <PlayerTable />
    </Fragment>
  );
};

export default App;
