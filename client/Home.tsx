import * as React from "react";
import {Header} from "./Header";
import {Editor} from "./Editor";

export class Home extends React.Component<any, {}>{
    render() {
        return [<Header/>,
                <div>This is home!</div>,
                <Editor/>];
    }
}