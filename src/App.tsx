import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Navigation from "./components/Navigation";
import DetailPage from "./components/DetailPage";
import {DETAIL_PATH, FAVORITE_PATH, HOME_PATH, SEARCH_PATH} from "./api/routes";
import FavoritePage from "./components/FavoritePage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route path={HOME_PATH} exact>
                        <SearchPage />
                    </Route>
                    <Route path={DETAIL_PATH}>
                        <DetailPage />
                    </Route>
                    <Route path={FAVORITE_PATH}>
                        <FavoritePage />
                    </Route>
                    <Route path={SEARCH_PATH} exact>
                        <SearchPage />
                    </Route>
                </Switch>

            </BrowserRouter>
        </>
    );
}

export default App;
