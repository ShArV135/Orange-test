import {BookResponse, BooksResponse} from "./interfaces";

export function fetchBooks(keyword: string): Promise<BooksResponse> {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            if (response.error) {
                throw new Error(response.error.message);
            }

            return response;
        });
}

export function fetchBook(id: string): Promise<BookResponse> {
    return fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            if (response.error) {
                throw new Error(response.error.message);
            }

            return response;
        });
}
