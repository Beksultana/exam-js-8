import React, {Component} from 'react';
import axios from '../../axios-quote-show';
import {Button, CardFooter, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom'
import './QoutesList.css';
import {CATEGORIES} from "../../Category";

class QuotesList extends Component {

    state = {
      quotes: null
    };

    componentDidMount(){
        axios.get('quotes.json').then(response => {
            console.log(response.data);
            const quotes = Object.keys(response.data).map(id => {
                return {...response.data[id], id}
            });
            this.setState({quotes})
        })
    }

    render() {
        let quotes = null;

        if (this.state.quotes){
            quotes = this.state.quotes.map((quote) => (
                <div key={quote.id} className="cardInfoBlock">
                    <div className="cardInfo">
                        <CardText>" {quote.quoteText} "</CardText>
                        <CardTitle>--- <i>{quote.author}</i></CardTitle>
                    </div>
                    <CardFooter className="CardFooter">
                        <Button color="primary">Edit</Button>
                        <Button color="danger">Remove</Button>
                    </CardFooter>
                </div>
            ))
        }

        return (
            <Row style={{margin: '20px 0 15px 0'}}>
                <Col className={'sm3'} sm={3}>
                    <h5><strong>Products by category: </strong></h5>
                    <Nav vertical>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/" exact>All</NavLink>
                        </NavItem>
                        {Object.keys(CATEGORIES).map(categoryId => (
                            <NavItem key={categoryId}>
                                <NavLink
                                    tag={RouterNavLink}
                                    to={'/quotes/' + categoryId}
                                    exact
                                >
                                    {CATEGORIES[categoryId]}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </Col>
                <Col sm={9}>
                    <div className={'quotesCategryBlock'}>
                        {quotes}
                    </div>
                </Col>
            </Row>
        );
    }
}

export default QuotesList;