import React, {useState} from 'react';
import {FormControl, InputGroup} from "react-bootstrap";
import {generatePath, useHistory, useParams} from "react-router-dom";
import {SEARCH_PATH} from "../api/routes";
import {SearchParams} from "../api/interfaces";

export default function SearchPanel() {
    const { q } = useParams<SearchParams>();
    const history = useHistory();
    const [value, setValue] = useState(q);
    const [typingTimer, setTimer] = useState<ReturnType<typeof setTimeout>>();

    const onChange = function(e: any) {
        const value = e.target.value;

        setValue(value);

        if (typingTimer) {
            clearTimeout(typingTimer);
        }
        setTimer(setTimeout(() => {
            console.log('trigger');
            console.log(value);
            const path = generatePath(SEARCH_PATH, {q: value})
            history.push(path);
        }, 1000));
    };

    return (
        <InputGroup className="my-3">
            <FormControl
                placeholder="Search..."
                onChange={(e) => onChange(e)}
                value={value}
            />
        </InputGroup>
    );
}
