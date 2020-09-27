import React from "react";
import { InsertionCanvas, QuickCanvas } from "./components/VisualCanvas";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            algorithm: "IS",
        };
    }

    handleChange = () => {
        this.setState({
            algorithm: this.state.algorithm == "IS" ? "QS" : "IS",
        });
    };

    render() {
        return (
            <div className="App">
                <input
                    type="button"
                    className="btn"
                    value={
                        this.state.algorithm == "IS"
                            ? "Change to Quick Sort"
                            : "Change to Insertion Sort"
                    }
                    onClick={this.handleChange}
                />
                {this.state.algorithm === "IS" ? (
                    <InsertionCanvas />
                ) : (
                    <QuickCanvas />
                )}
            </div>
        );
    }
}

export default App;
