import React from 'react';
import {Col, Row} from "react-bootstrap";
import BookItem from "./BookItem";
import {Book} from "../api/interfaces";

interface Props {
    books: Array<Book>,
}

export default function BookList({books}: Props) {
    return (
        <Row>
            {
                books.map((book: Book) => (
                    <Col md={4} key={book.id} className="my-2">
                        <BookItem book={book}/>
                    </Col>
                ))
            }
        </Row>
    );
}
