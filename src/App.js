import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
            <Route path="/" exact render={() => <h1>Home</h1>}/>
            <Route path="/add" exact render={() => <h1>Add</h1>}/>
            <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>Not fount!</h1>}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
