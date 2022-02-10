import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/home";
import SearchResult from "./pages/searchResult";
import ItemDetail from "./pages/itemDetail";

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/items/:id">
              <ItemDetail />
          </Route>
          <Route path="/items">
              <SearchResult />
          </Route>
          <Route path="/">
              <Home />
          </Route>
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
