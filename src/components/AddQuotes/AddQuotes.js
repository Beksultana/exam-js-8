import React, {Component, Fragment} from 'react';
import axios from '../../axios-quote-show';
import QuotesForm from "../../containers/QuotesForm/QuotesForm.";

class AddQuotes extends Component {

    addQuotes = quotes => {
       axios.post('quotes.json', quotes).then(() => (
           this.props.history.replace('/')
       ));
    };

    render() {
        return (
           <Fragment>
               <QuotesForm onSubmit={this.addQuotes}/>
           </Fragment>
        );
    }
}

export default AddQuotes;