import React, {Component, Fragment} from 'react';
import {Button, Form, Input} from "reactstrap";
import axios from '../../axios-quote-show';
import './Edit.css';

class Edit extends Component {

    state = {
        author: '',
        quoteText: '',
    };

    quotesId = this.props.match.params.id;

    componentDidMount(){
        console.log(this.quotesId);
        axios.get('/quotes/' + this.quotesId + '.json').then(res => {
            this.setState({
                author: res.data.author,
                quoteText: res.data.quoteText,
            })
        })
    }

    onClickSave = () => {
        this.props.history.push('/')
    };

    onValueChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    };

    render() {
        return (
            <Fragment>
                <Form>
                    <Input value={this.state.author} onChange={this.onValueChange} type="text"/>
                    <Input value={this.state.quoteText} onChange={this.onValueChange} type="textarea"/>
                    <Button onClick={this.onClickSave}>Save</Button>
                </Form>
            </Fragment>
        );
    }
}

export default Edit;