import React, {useEffect, useState} from 'react';
import {useFavorite} from "../api/hooks";
import {BookResponse} from "../api/interfaces";
import {fetchBook} from "../api/app";
import BookList from "./BookList";
import {Container} from "react-bootstrap";

export default function FavoritePage() {
    const [favorites] = useFavorite();
    const [books, setBooks] = useState<Array<BookResponse>>([]);

    useEffect(() => {
        async function loadData() {
            let loadedBooks = [];

            for (const id of favorites) {
                const book = await fetchBook(id);
                loadedBooks.push(book);
            }

            setBooks(loadedBooks);
        }

        loadData();
    }, [favorites]);

    return (
        <Container>
            <BookList books={books} />
        </Container>
    );
}
