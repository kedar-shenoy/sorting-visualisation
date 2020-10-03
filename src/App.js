import React from "react";
import {
    InsertionCanvas,
    QuickCanvas,
    BubbleCanvas,
    MergeCanvas,
    HeapCanvas,
} from "./components/VisualCanvas";
import "./App.css";
import data from "./data/algo_info";

const algos = [
    "Insertion Sort",
    "Quick Sort",
    "Bubble Sort",
    "Merge Sort",
    "Heap Sort",
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            algorithm: 0,
        };
    }

    render() {
        let canvas = null;
        switch (this.state.algorithm) {
            case 0:
                canvas = <InsertionCanvas />;
                break;
            case 1:
                canvas = <QuickCanvas />;
                break;
            case 2:
                canvas = <BubbleCanvas />;
                break;
            case 3:
                canvas = <MergeCanvas />;
                break;
            case 4:
                canvas = <HeapCanvas />;
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
                        {algos.map((algo, i) => {
                            return (
                                <button
                                    className="btn"
                                    onClick={(e) =>
                                        this.setState({ algorithm: i })
                                    }
                                    style={
                                        this.state.algorithm === i
                                            ? {
                                                  backgroundColor: "#2c3e50",
                                                  color: "#fff",
                                              }
                                            : {}
                                    }
                                >
                                    {algo}
                                </button>
                            );
                        })}
                    </div>
                    <div className="canvas">{canvas}</div>
                </div>
            </div>
        );
    }
}

export default App;
