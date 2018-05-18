import * as React from "react";
import ReactMde, {ReactMdeTypes} from "react-mde";
import * as Showdown from "showdown";

export interface AppState {
    mdeState: ReactMdeTypes.MdeState;
}

export class Editor extends React.Component<{}, AppState>{

    converter: Showdown.Converter;

    constructor(props: any) {
        super(props);
        this.state = {
            mdeState: null,
        };
        this.converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true});
    }

    handleValueChange = (mdeState: ReactMdeTypes.MdeState) => {
        this.setState({mdeState});
        //console.log(mdeState);
    }

    render() {
        return (
            <div className="container">
                <ReactMde
                    onChange={this.handleValueChange}
                    editorState={this.state.mdeState}
                    layout='horizontal'
                    generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
                />
            </div>
        );
    }
}