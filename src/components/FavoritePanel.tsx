import React from 'react';
import {Button} from "react-bootstrap";
import {useFavorite} from "../api/hooks";

interface Props {
    id: string
}

export default function FavoritePanel({id}: Props) {
    const [, hasFavorite, addFavorite, removeFavorite] = useFavorite();

    return (
        <>
            {
                hasFavorite(id) ?
                    (
                        <Button variant="warning" className="ms-auto d-block" onClick={() => removeFavorite(id)}>
                            Remove from favorite
                        </Button>
                    )
                    :
                    (
                        <Button variant="success" className="ms-auto d-block" onClick={() => addFavorite(id)}>
                            Add to favorite
                        </Button>
                    )
            }
        </>
    );
}
