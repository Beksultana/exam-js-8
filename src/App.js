import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import Header from "./components/Header/Header";
import {Container} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddQuotes from "./components/AddQuotes/AddQuotes";
import QuotesList from "./containers/QuotesList/QuotesList";
import Edit from "./containers/Edit/Edit";


class App extends Component {
  render() {
    return (
      <Fragment>
          <Header/>
        <Container>
            <Switch>
                <Route path="/" exact component={QuotesList}/>
                <Route path="/add" component={AddQuotes}/>
                <Route path="/quotes/:id/edit"  exact component={Edit}/>
                <Route path="/quotes/:categoryId" component={QuotesList}/>
                <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>Not fount!</h1>}/>
            </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default App;
