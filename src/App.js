import React from "react";
import p5 from "p5";
import InsertionSketch from "./sketches/insertion";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myP5 = new p5(InsertionSketch, this.myRef.current);
    }

    render() {
        return <div className="App" ref={this.myRef}></div>;
    }
}

export default App;
