import React, {useEffect, useState} from 'react';
import {fetchBook} from "../api/app";
import {Alert, Container} from "react-bootstrap";
import {useParams} from "react-router-dom";
import BookDetail from "./BookDetail";
import {BookResponse, DetailParams} from "../api/interfaces";
import FavoritePanel from "./FavoritePanel";

export default function DetailPage() {
    let { id } = useParams<DetailParams>();
    const [error, setError] = useState(null);
    const [book, setBook] = useState<BookResponse | undefined>(undefined);

    useEffect(() => {
        async function fetchData() {
            try {
                const book = await fetchBook(id);
                setBook(book);
            } catch (e: any) {
                setError(e.message);
            }
        }

        fetchData();
    }, [id]);

    return (
        <Container className="mt-3">
            {
                error &&
                <Alert variant="danger">
                    {error}
                </Alert>
            }
            <FavoritePanel id={id} />
            {
                book &&
                <BookDetail book={book} />
            }
        </Container>
    );
}
