import React, {useEffect, useState} from 'react';
import SearchPanel from "./SearchPanel";
import {fetchBooks} from "../api/app";
import {Alert, Container} from "react-bootstrap";
import BookList from "./BookList";
import {useParams} from "react-router-dom";
import {Book, SearchParams} from "../api/interfaces";

export default function SearchPage() {
    const { q } = useParams<SearchParams>();
    const [error, setError] = useState(null);
    const [books, setBooks] = useState<Array<Book>>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                if (q === undefined) {
                    return;
                }

                const books = await fetchBooks(q);

                setBooks(books.items);
                setError(null);
            } catch (e: any) {
                setError(e.message);
            }
        }

        fetchData();
    }, [q]);

    return (
        <Container>
            <SearchPanel />
            {
                error &&
                <Alert variant="danger">
                    {error}
                </Alert>
            }
            {
                books &&
                <BookList books={books} />
            }
        </Container>
    );
}
