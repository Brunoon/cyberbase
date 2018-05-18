import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import "semantic-ui-css/semantic.min.css";
import 'react-mde/lib/styles/css/react-mde-all.css';

import { Home } from "./Home";
import { Hello } from "./Hello";
import { Editor } from "./Editor";

if ((module as any).hot) {
    (module as any).hot.accept();
}

ReactDOM.render(
    <Router>
        <Route path="/" component={Home} />
    </Router>,
    document.getElementById("root")
);