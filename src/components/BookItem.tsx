import React from 'react';
import {generatePath, useHistory} from "react-router-dom";
import {DETAIL_PATH} from "../api/routes";
import {Book} from "../api/interfaces";

interface Props {
    book: Book,
}

export default function BookItem({book}: Props) {
    const history = useHistory();
    const path = generatePath(DETAIL_PATH, {id: book.id});

    const {volumeInfo} = book;
    return (
        <div className="book-item" onClick={() => { history.push(path) }}>
            <div className="text-center">
                <div className="title-container">
                    <h5>{volumeInfo.title}</h5>
                    <h6>{volumeInfo.subtitle}</h6>
                </div>
                <div className="item-container">
                    {
                        volumeInfo.imageLinks &&
                        <img src={volumeInfo.imageLinks.thumbnail} className="img-fluid" alt={volumeInfo.title} />
                    }
                </div>
            </div>
            <p dangerouslySetInnerHTML={{__html: volumeInfo.description}} />
        </div>
    );
}
