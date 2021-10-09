import React from 'react';
import {BookResponse} from "../api/interfaces";

interface Props {
    book: BookResponse,
}

export default function BookDetail({book}: Props) {
    const {volumeInfo: {title, subtitle, imageLinks, description}} = book;

    return (
        <div className="text-center">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            {
                imageLinks &&
                <img src={imageLinks.medium || imageLinks.thumbnail} className="img-fluid" alt={title} />
            }
            <p className="mt-4" dangerouslySetInnerHTML={{__html: description}} />
        </div>
    );
}
