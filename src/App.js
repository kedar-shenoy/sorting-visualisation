import React from "react";
import {
    InsertionCanvas,
    QuickCanvas,
    BubbleCanvas,
} from "./components/VisualCanvas";
import "./App.css";
import data from "./data/algo_info";

const algos = {
    IS: "Insertion Sort",
    QS: "Quick Sort",
    BS: "Bubble Sort",
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            algorithm: "IS",
        };
    }

    handleChange = (algo) => {
        this.setState({
            algorithm: algo,
        });
    };

    render() {
        let canvas = null;
        switch (this.state.algorithm) {
            case "IS":
                canvas = <InsertionCanvas />;
                break;
            case "QS":
                canvas = <QuickCanvas />;
                break;
            case "BS":
                canvas = <BubbleCanvas />;
                break;
        }

        return (
            <div className="App">
                <div className="container-row">
                    <h3 className="heading">Sorting algorithm visualizer</h3>
                </div>
                <div className="container-row">
                    <div className="container-col">
                        <p className="current">
                            Current algorithm: {algos[this.state.algorithm]}
                        </p>
                        <button
                            className="btn"
                            onClick={(e) => this.handleChange("IS")}
                        >
                            Insertion Sort
                        </button>
                        <button
                            className="btn"
                            onClick={(e) => this.handleChange("QS")}
                        >
                            Quick Sort
                        </button>
                        <button
                            className="btn"
                            onClick={(e) => this.handleChange("BS")}
                        >
                            Bubble Sort
                        </button>
                    </div>
                    <div className="canvas">{canvas}</div>
                </div>
            </div>
        );
    }
}

export default App;
