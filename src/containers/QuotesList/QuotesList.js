import React, {Component} from 'react';
import axios from '../../axios-quote-show';
import {Button, CardFooter, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom'
import './QoutesList.css';

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
            quotes = this.state.quotes.map((quote, index) => (
                <div key={index} className="cardInfoBlock">
                    <div className="cardInfo">
                        <CardText>" {quote.quoteText} "</CardText>
                        <CardTitle>--- {quote.author}</CardTitle>
                        <CardFooter className="CardFooter">
                            <Button color="primary">Edit</Button>
                            <Button color="danger">Remove</Button>
                        </CardFooter>
                    </div>
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
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/" exact>Star Wars</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/" exact>Famous people</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/" exact>Saying</NavLink>
                        </NavItem><NavItem>
                        <NavLink tag={RouterNavLink} to="/" exact>Humour</NavLink>
                    </NavItem><NavItem>
                        <NavLink tag={RouterNavLink} to="/" exact>Motivational</NavLink>
                    </NavItem>


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