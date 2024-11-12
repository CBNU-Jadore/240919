import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function SearchBox() {
    const [keyword, setKeyword] = useState('');

    let history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`);
        } else {
            history.push(history.location.pathname);
        }
    };

    return (
        <Form onSubmit={submitHandler} inline className="d-flex w-100">
            <Form.Control
                type="text"
                name="q"
                onChange={(e) => setKeyword(e.target.value)}
                className="mr-sm-2 ml-sm-5 flex-grow-1"
                style={{ width: '70%' }} // Making the search box wider
            ></Form.Control>

            <Button
                type="submit"
                variant="primary"
                className="p-2"
            >
                Search
            </Button>
        </Form>
    );
}

export default SearchBox;
