import React, {Component, Fragment} from 'react';
import {CATEGORIES} from '../../Category';
import './QuotesForm.css';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class ProductForm extends Component {

    state = {
        category: Object.keys(CATEGORIES)[0],
        author: '',
        quoteText: '',
    };

    valueChange = event => {
        const name = event.target.name;
        this.setState({[name]: event.target.value})
    };

    addQuotesHandler = event => {
        event.preventDefault();
        this.props.onSubmit({...this.state})
    };

    render() {
        return (
            <Fragment>
                <div className="titleText">
                    <h4><strong>Submit new quote</strong></h4>
                </div>
                <Form onSubmit={this.addQuotesHandler} className="ProductForm">
                    <FormGroup  row>
                        <Label for="exampleEmail" sm={2}><strong>Categories</strong></Label>
                        <Col sm={10}>
                            <Input className="inputs" type="select" name="category" id="category"
                                   value={this.state.category} onChange={this.valueChange}>
                                {Object.keys(CATEGORIES).map(categoryId => (
                                    <option key={categoryId} value={categoryId}>{CATEGORIES[categoryId]}
                                    </option>
                                ))}
                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="author" sm={2}><strong>Author</strong></Label>
                        <Col sm={10}>
                            <Input className="inputs" type="text" name='author' id='author'
                                   value={this.state.author} onChange={this.valueChange}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="quoteText" sm={2}><strong>Quote text</strong></Label>
                        <Col sm={10}>
                            <Input className="inputs" type={'textarea'} name="quoteText" id="quoteText"
                                   value={this.state.quoteText} onChange={this.valueChange}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col sm={{size: 10, offset: 2}}>
                            <Button color="primary" type="Submit" >Save</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

export default ProductForm;