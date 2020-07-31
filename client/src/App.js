import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={CreateRoom} />
          <Route path='/room/:roomID' component={Room} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
