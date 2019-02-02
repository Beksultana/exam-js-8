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
        axios.put('/quotes/' + this.quotesId + '.json', this.state).then(() => {
            this.props.history.push('/')
        })

    };

    valueChange = event => {
        const name = event.target.name;
        this.setState({[name]: event.target.value})
    };

    render() {
        return (
            <Fragment>
                <Form>
                    <Input value={this.state.author} onChange={this.valueChange} name="author" type="text"/>
                    <Input value={this.state.quoteText} onChange={this.valueChange} name="quoteText" type="textarea"/>
                    <Button onClick={this.onClickSave}>Save</Button>
                </Form>
            </Fragment>
        );
    }
}

export default Edit;